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

app.get('/search/:term', (req, res) =>{
    console.log(req.params.term);
    // const apiUrl = `http://www.omdbapi.com/search/term?apikey=${process.env.OMDB_API_KEY}&`;
    // apiClient({ method: "get", url: apiUrl}).then(apiRes => {
    //     console.log(apiRes);
    // })
})

app.listen(process.env.PORT, err => {
    console.log(`running on port ${process.env.PORT}.....`);
})