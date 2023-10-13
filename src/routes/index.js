const newsRouter = require('./news')
const moviesRouter = require('./movies')

const siteRouter = require('./site')

function route(app) {
  app.use('/news', newsRouter)
  app.use('/movies', moviesRouter)
  //app.use(express.static(__dirname + '../movies'))

  app.use('/', siteRouter)
}

module.exports = route
