require('dotenv').config();
require('./src/models/index');
const express = require('express');
const cors = require('cors');
const sequelize  = require('./src/db/database');


// Initializations
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use(require('./src/routes/auth'));
app.use(require('./src/routes/router-user'));

//DB
( async () => { await sequelize.sync({ force: false }); })();

sequelize.authenticate()
    .then(() => { console.log(('Connected to database successfully'));})
    .catch( err => { console.log('Could not connect to database');});

// Starting the server
app.listen(process.env.PORT);
console.log(`Server running on port ${process.env.PORT}`);

