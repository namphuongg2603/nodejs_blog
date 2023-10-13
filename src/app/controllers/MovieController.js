const Movie = require('../models/Movie')
const { mutipleMongooseToOject } = require('../../util/mongoose')

class MovieController {
  //[GET] /movies/:slug
  show(req, res) {
    Movie.findOne({ slug: req.params.slug })
      .lean()
      .then((movie) => {
        res.render('movies/show', { movie })
      })
  }

  //[GET] /movies/create
  create(req, res, next) {
    res.render('movies/create')
  }

  //[POST] /movies/store
  store(req, res, next) {
    res.json(req.body)
  }
}

module.exports = new MovieController()
