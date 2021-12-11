const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./app/database/config');

//connect DB
db.connect();
//config
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());
//session
//use sessions for tracking logins
app.use(
  session({
    secret: 'admin',
    resave: true,
    saveUninitialized: false,
  }),
);

//Loads the handlebars module
const handlebars = require('express-handlebars');

//Http logger
// app.use(morgan('combined'));

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
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
route(app);

//app start
app.listen(port, () => {
  console.log(`App run listening at http://localhost:${port}`);
});
