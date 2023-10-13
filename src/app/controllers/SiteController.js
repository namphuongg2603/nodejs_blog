const Movie = require('../models/Movie')
const { mutipleMongooseToOject } = require('../../util/mongoose')

class SiteController {
  //[GET] /
  index(req, res, next) {
    Movie.find({})
      .lean()
      .then((movies) => res.render('home', { movies }))
      .catch(next)

    // Course.find({}, function (err, courses) {
    //   if (!err) res.json(courses)
    //   res.status(400).json({ error: 'ERROR' })
    // })
    // //res.render('home');
  }

  //[GET] /search
  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
