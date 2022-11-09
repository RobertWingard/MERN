const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    //find all jokes
    app.get('/api/jokes', JokeController.findAllJokes);

    //find one joke
    app.get('/api/jokes/:id', JokeController.findOneJoke);

    //update joke
    app.put('/api/jokes/:id', JokeController.updateJoke);

    //create new joke
    app.post('/api/jokes', JokeController.createNewJoke);

    //delete joke
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}