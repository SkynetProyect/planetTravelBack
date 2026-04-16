import express from 'express';
import countriesRouter from '../../infrastructure/entrypoints/rest/router/RestRouter';

const app = express();

app.use(express.json());

// Montar router
app.use('/countries', countriesRouter);

module.exports = app;

