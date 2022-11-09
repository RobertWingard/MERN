const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 8000;
const DB = 'products'
// MIDDLEWARE
app.use(cors(), express.json(), express.urlencoded({extended:true}));


//  CONNECT TO THE DB
require('./config/config')(DB)

// CONNECT THE ROUTES
require("./routes/routes")(app)

// STARTING UP
app.listen(PORT, () => console.log(`-----------here we go again on ${PORT}------------`))