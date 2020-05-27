const express = require('express'); 
const router = express.Router(); 

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

router.get("/", listDogsController)
router.get("/:id", getDogController)
router.post("/", createDogController) 
router.delete("/:id", deleteDogController)

module.exports = {router} 