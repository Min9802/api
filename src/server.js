const express = require('express');
const bodyParser = require('body-parser');
const viewEngine = require('./config/viewEngine');
const initWebRouters = require('./routes/web');
const session = require('express-session');
const cors = require('cors');

require('dotenv').config();

const app = express();

//config app
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//use sessions for tracking logins
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: false,
    }),
);
// viewEngine(app);
initWebRouters(app);

const PORT = process.env.PORT || 3000;
const APP_URL = process.env.APP_URL || 'http://localhost';
app.listen(PORT, () => {
    console.log('App run listening at: ' + APP_URL + ":" + PORT);
})