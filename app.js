/* by convention, this file contains all the logic 
   necessary for the application to function */
const express = require("express")
const cors = require("cors")

const app = express()
app.get("/", indexController)

const indexController = (request, response) => {
    response.json({ message: "Hi!" })
}

/* Using routers - 
    since we created an express router for "dogs", we can say that 
    anything destined for "/dogs*" should be handled by the dogs router 

    This allows also us to remove the "dogs" prefix from all of the routes 
    in that router. 
*/
const dogsRouter = require("./controllers/dogs") // importing the router 
app.use("/dogs", dogsRouter); // using the router 

module.exports { app } 
