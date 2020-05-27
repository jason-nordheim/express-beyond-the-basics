const express = require('express'); 
const router = express.Router(); 


router.get("/", indexController)
router.get("/dogs", listDogsController)
router.get("/dogs/:id", getDogController)
router.post("/dogs", createDogController) 
router.delete("/dogs/:id", deleteDogController)

module.exports = {router} 