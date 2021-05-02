const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', async(req,res) => {
  try {
    const movies = await Movie.find()
    res.json(movies)
  } catch (err) {
    res.send('Error' + err)
  }
})

router.get('/:id', async(req,res) => {
  try {
    const movies = await Movie.findById(req.params.id)
    res.json(movies)
  } catch (err) {
    res.send('Error' + err)
  }
})

router.post('/', async(req,res) => {
  const movie = new Movie({
    title: req.body.title,
    year: req.body.year,
    rating: req.body.rating
  })
  try {
    const m1 = await movie.save()
    res.json(m1)
  } catch (err) {
    res.send('Error' + err)
  }
})

module.exports = router;