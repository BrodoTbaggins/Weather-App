const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const port = process.env.PORT || 3001;
const key='581fad679ce85645';
const baseURL = '/api/weather'
const wc = require(__dirname + '/controllers/weather_controller.js');

app.use(bodyParser.json());

app.get(`${baseURL}/:state/:city`, (req, res) => {
    axios.get(`http://api.wunderground.com/api/${key}/forecast10day/q/${req.params.state}/${req.params.city}.json`)
    .then(response => {
        res.send(response.data);
    })
})

app.get(baseURL, wc.read);
app.post(baseURL, wc.create);
app.put(`${baseURL}/:id`, wc.update);
app.delete(`${baseURL}/:id`, wc.delete);

app.listen(port, () => console.log(`The weather is drizzling on port ${port}`))