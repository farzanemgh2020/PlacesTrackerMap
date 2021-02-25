const placeRepository =require('./PlaceRepo.js');
const express = require('express');
const router = express.Router();

//fetch all Places
router.get("/", (req, res) => {
  res.json(placeRepository.getPlaces());
});

// create a new place
router.post('/',(req,res)=>{
  const placeId = placeRepository.insert(req.body);
  res.json(placeId);
});

//Edit a place
router.put("/:id",(req, res)=>{
  const placeId = placeRepository.update(req.params.id, req.body);
  if(placeId)
    res.json(placeId);
  else  
    res.sendStatus(404);
});

//Delete a place
router.delete("/:id",(req,res)=>{
  placeRepository.delete(req.params.id);
  res.json(req.params.id);
});

module.exports = router