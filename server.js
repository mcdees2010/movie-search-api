require('dotenv').config();

const express = require('express'),
      app = express(),
      logger = require('morgan'),
      axios = require('axios');



app.listen(process.env.PORT, err => {
    console.log(`running on port ${process.env.PORT}.....`);
})