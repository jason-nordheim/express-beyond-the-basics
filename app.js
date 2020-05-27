/* by convention, this file contains all the logic 
   necessary for the application to function */
const express = require("express")
const cors = require("cors")

const app = express()
app.get("/", indexController)

const indexController = (request, response) => {
    response.json({ message: "Hi!" })
}

const dogs [
    {id: 1, name: "bixby"}, 
    {id: 2, name: "alex"}
]; 
const listDogsController = (request, response) => {
    const dog = dogs.find(d => d.id == request.params.id); 
    response.json({dog})
}
const findNextDogId(){
    let nextID = 1; 
    dogs.forEach(dog => {
        nextID = dog.id > nextID 
            ? dog.id
            : nextID 
    });
}
const createDogController = (request, response) => {
    const dog = {
        id: findNextDogId(), 
        name: request.body.name, 
    }
    dogs.push(dog); 
    response.status(200).json({dog}); 
}
const getDogController = (request, response) => {
    const dog = dogs.find(dog => dog.id == request.params.id); 
    response.json({dog}); 
}
const deleteDogController = (request, response) => {
    dogs = dogs.filter(dog => dog.id != request.params.id); 
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
