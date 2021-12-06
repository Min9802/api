const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

const route = require('./routes');

//config
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//Loads the handlebars module
const handlebars = require('express-handlebars');

//Http logger
app.use(morgan('combined'));

//Template
//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');

//Sets handlebars
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'main',
    }),
);

// set views
app.set('views', path.join(__dirname, 'resources/views'));

//route init
route(app);

//app start
app.listen(port, () => {
    console.log(`App run listening at http://localhost:${port}`);
});
