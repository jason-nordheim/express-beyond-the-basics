/* by convention, this file contains all the logic 
   necessary for the application to function */

const express = require("express")
const cors = require("cors")

const app = express()

app.get("/", (request, response) => {
  response.json({ message: "Hi!" })
})

module.exports { app } 
