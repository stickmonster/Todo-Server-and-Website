jQuery(function($) {
    // create button and add functionality
    $('#add-todo').button({
      icons: {
          primary: "ui-icon-circle-plus"
      }
    })

    function getData() {
      var starterTodos = { 
        todo : [],
        done : []
      }; 
  
      $('#todo-list').each( function() {
        var results = $(this).find('.todo-task').text();
        starterTodos.todo.push(results);   
      });
      $('#todo-list').each( function() {
        var results = $(this).find('.task').text(); 
        starterTodos.todo.push(results);
       });
      $('#todo-list').each( function() {
        var results = $(this).find('.complete-task').text(); 
        starterTodos.todo.push(results);
       });
      $('#completed-list').each( function() {
        var results = $(this).find('.complete-task').text();   
        starterTodos.done.push(results);
      });
      $('#completed-list').each( function() {
        var results = $(this).find('.task').text();   
        starterTodos.done.push(results);
      $('#completed-list').each( function() {
        var results = $(this).find('.todo-task').text();   
        starterTodos.done.push(results);
        });
      
        $.post("/", $.param(starterTodos));
        return $.param(starterTodos);
      });    

    }; 
 
    // the two following functions parse the data sent by ejs 
    //and splits it on commas, before extracting the text of the item,
    // discarding any blank fields, reassembling with html for display, 
    // and adding a comma so that the lists may be re-sorted
    // on the next pass through
    
    $('#todo-task').each(function(){
    var todoTaskComma = $('#todo-task').val();
    var todoTask = todoTaskComma.split(',');
    var todoTaskHTML = '<li><span class="done">%</span>';
    todoTaskHTML += '<span class="delete">x</span>';
    todoTaskHTML += '<span class="todo-task"></span></li>';
    for (var i =0; i <todoTask.length; i++){
  
      if (todoTask[i] !== '') {

      var $stillTodoTask = $(todoTaskHTML);
      $stillTodoTask.find('.todo-task').text(todoTask[i]+ ",");
      $('#todo-list').prepend($stillTodoTask);
  
    } 
  }
});


    $('#complete-task').each(function(){
    var completeTaskComma = $('#complete-task').val();
    var completeTask = completeTaskComma.split(',');
    var completeTaskHTML = '<li><span class="done">%</span>';
    completeTaskHTML += '<span class="delete">x</span>';
    completeTaskHTML += '<span class="complete-task"></span></li>';
  
    for (var i =0; i <completeTask.length; i++){
  
      if (completeTask[i] !== '') {
        var $doneTask = $(completeTaskHTML);
        $doneTask.find('.complete-task').text(completeTask[i]+ ",");
        $('#completed-list').prepend($doneTask);
  
      };  
  
    }
  });
 
    $('#add-todo').on("click", function() {
      $('#new-todo').dialog('open');
    
    }); // end click
   
    // build dialog box and add functionality
    $('#new-todo').dialog({
      modal: true,
      autoOpen: false,
      buttons : {
        "Add task" : function() {
          var taskName = $('#task').val();
          if (taskName === '') {

            return false;
          }
           
          var taskNewHTML = '<li><span class="done">%</span>';
          taskNewHTML += '<span class="delete">x</span>';
          taskNewHTML += '<span class="task"></span></li>';
  
          // convert HTML string to jQuery Object 
          var $newTask = $(taskNewHTML);
  
          // add taskname, but make sure HTML is escaped
          $newTask.find('.task').text(taskName + ',');
  
          //hide new task
          $newTask.hide();
  
          // append to To Do list 
          $('#todo-list').prepend($newTask);
          getData();
          // show with effect and highlight
          $newTask.show('clip',250).effect('highlight',1000);
          $(this).dialog('close');
//          return $('#todo-list');
        },
        "Cancel" : function() {
          $(this).dialog('close');
   
        }
 
      },
 
      close: function() {
            $('#new-todo input').val(''); /*clear fields*/
      }

    }); // end dialog
 
 
      // mark as complete
    $('#todo-list').on('click','.done', function() {
      var $taskItem = $(this).parent('li');
      $taskItem.slideUp(250, function() {
        var $this = $(this);
        $this.detach();
       // $('#completed-list').prepend(done);
        $('#completed-list').prepend($this);
        getData();
    
        $this.slideDown();
        
      });
    }); // end on
 
 
    //make both lists sortable, with the addition of data collection after re-sorting
    $('.sortlist').sortable({
      connectWith : '.sortlist',
      cursor : 'pointer',
      placeholder : 'ui-state-highlight',
      cancel : '.delete,.done',
      stop: function() { getData()}
    }); // end sortable
    
    // delete a list item
       
    $('.sortlist').on('click','.delete',function() {
      $(this).parent('li').effect('puff', function() {
      $(this).remove();
      getData();
      }); // end effect
     
    }); // end on

  }); // end ready
 