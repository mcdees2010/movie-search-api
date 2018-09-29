require('dotenv').config();

const express = require('express'),
      app = express(),
      logger = require('morgan'),
      axios = require('axios');

const apiClient = axios.create();

// MIDDLEWARE
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(process.env.PORT, err => {
    console.log(`running on port ${process.env.PORT}.....`);
})