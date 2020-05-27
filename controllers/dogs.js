const express = require('express'); 
const router = express.Router(); 


router.get("/", listDogsController)
router.get("/:id", getDogController)
router.post("/", createDogController) 
router.delete("/:id", deleteDogController)

module.exports = {router} 