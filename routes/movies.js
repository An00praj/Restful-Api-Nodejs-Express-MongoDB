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
    const movie = await Movie.findById(req.params.id)
    res.json(movie)
  } catch (err) {
    res.send('Error' + err)
  }
})

router.post('/', async(req,res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub
  })

  try {
    const m1 = await movie.save()
    res.json(m1)
  } catch (err) {
    res.send('Error')
  }
})

router.patch('/:id', async(req,res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    movie.sub = req.body.sub
    const m1 = await movie.save()
    res.json(m1)
  } catch (err) {
    res.send('Error')
  }
})

module.exports = router;