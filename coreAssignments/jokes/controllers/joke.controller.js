const Joke = require("../models/jokes.model")


// find all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allDaJokes => res.json({ jokes: allDaJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
// find one joke
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json( oneJoke ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
// create new joke
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json( newlyCreatedJoke ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
// update
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json( updatedJoke ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
// delete
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}