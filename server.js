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
    let terms = req.params.term;
    const apiUrl = `http://www.omdbapi.com/?s=${terms}&apikey=${process.env.OMDB_API_KEY}&`;
    apiClient({ method: "get", url: apiUrl}).then(apiRes => {
        let posters = '';
        for(var i = 0; i < apiRes.data.Search.length; i++){
            const images = apiRes.data.Search[i].Poster;
            posters = posters + `<img src=${images}>`;
        }
        res.send(posters);
    })
})

app.listen(process.env.PORT, err => {
    console.log(err || `running on port ${process.env.PORT}.....`);
})