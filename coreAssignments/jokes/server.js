const express = require("express")
const app = express();
const PORT = 8000;
const DB = "jokes"

app.use(express.json(), express.urlencoded({extended:true}));

app.get("/api/demo", (req,res) => {
    res.json({status: "all good ❤"})
})

// connect to the db using mongoose
require("./config/mongoose.config")(DB)

// modularize routes
require("./routes/joke.routes")(app)


//START THE SERVER LAST
app.listen(PORT, () => console.log(`---------- Server is up on ${PORT} ------`))