# Todo-Server-and-Website
Todo list in NodeJS, JQuery with MongoDB and Express/EJS middleware/templating




![](https://github.com/stickmonster/Todo-Server-and-Website/blob/main/todo%20list.gif)


The two sources for this project are Udemy's NodeJS course by Anthony Alicea and the todo list JQuery primer by David Sawyer McFarland, found in 'Javascript & jQuery, the missing manual'. The former provided code on the server side, the latter on the browser. Both of these needed heavily revising and reconfiguring to work in conjunction, including:

- a new schema and model to be written
- new post and get instructions on the server, including specific pulling of files from MongoDB
- ejs to be repackaged in the html file
- a data scraping function to be created which would work in conjunction with the current jQuery code
- a pair of functions to parse the ejs code into the jQuery file and configure it so that the data scraping function would work. These function were also coded to weed out empty or undefined database entries
- amendments to the sortlist so that the data scraping could pick up manually moved todo items
- configuring with MongoDB
- downloading of specific fonts
- structuring of the file system to allow these and other assets availability  


The todo-list now sends information to the sever which sends this to the MongoDB database, logs the list, the server then retrieves the latest data entry, forwards it to the templated html (ejs) which funnels it to certain areas of the page, and sends it onto the Javascript file. The JQuery then parses this, puts it into a form for display and ready for repackaging into the data-collection function which then runs on any new entries to the list, any deletions, any movements between lists, and on refresh.

The css has not been re-written and remains that of D.S. McFarland.

The files require NodeJS, express, ejs, and JQuery, the first there of which will need to be downloaded onto the command line, and the last of which is linked via the online option in the html file. A MongoDB database is also required, and the config file would have to be coded to allow this to connect.

Thanks for taking the time to look at this repository,

Toby
