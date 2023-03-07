const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const hendleError = require('./middlewares/error.middleware');
const initModels = require('./models/initModels');
const { UserRoutes, AuthRoutes, BusinessRoutes, Products, Owners } = require('./routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

db.authenticate()
    .then(() => console.log('Authenticate complete'))
    .catch(error => console.log(error));

db.sync({ force: false })
    .then(() => console.log('Synchronized database'))
    .catch(error => console.log(error));

initModels();

app.get('/api/v1', (req, res) => {
    res.status(200).json({
        owner: 'Luis Uzcategui',
        message: 'Welcome to Alfa API',
        apiVersion: `v${process.env.API_VERSION}`,
        documentation: `${process.env.HOST}/api/v1/docs`
    });
});

app.use('/api/v1', UserRoutes);
app.use('/api/v1', AuthRoutes);
app.use('/api/v1', BusinessRoutes);
app.use('/api/v1', Products);
app.use('/api/v1', Owners);

app.use(hendleError);

module.exports = app;