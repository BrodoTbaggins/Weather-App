let forecast = [];
let id = 0;

let MAX_FORECAST = 5;

module.exports = {
    create: (req, res) => {
    
            const {day, conditions, high, low, image} = req.body;
            forecast.push({id, day, conditions, high, low, image});
            id++;
            res.status(200).send(forecast)
       
    },

    read: (req, res) => {
        res.status(200).send(forecast);
    },

    update: (req, res) => {
        const updateID = req.params.id;
        let index = forecast.findIndex(weather => weather.id == updateID)

        forecast[index] = {
            id: forecast[index].id,
            day: req.body.day || forecast[index].day,
            conditions: req.body.conditions || forecast[index].conditions,
            high: req.body.high || forecast[index].high,
            low: req.body.low || forecast[index].low,
            image: req.body.image || forecast[index].image
        }

        res.status(200).send(forecast);
    },
    
    delete: (req, res) => {
        const deleteID = req.params.id;
        let weatherID = forecast.findIndex(weather => weather.id == deleteID);
        forecast.splice(weatherID, 1);
        res.status(200).send(forecast);
    }
}
