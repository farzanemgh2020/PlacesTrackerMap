const express = require("express");
var placeAPI = require('./place/PlaceApi.js');
var cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/place', placeAPI);


//  
/**
 * Server Activation
 */
const port = process.env.PORT || 8002;
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
module.exports = app;