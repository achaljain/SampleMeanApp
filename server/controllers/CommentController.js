var Resource = require('resourcejs');

module.exports = function(app, route) {

  // Setup the controller for REST;
  Resource(app, '/movie/:movieId', route, app.models.comment).rest({

    // Add a before handler to include filter and parent information.
    before: function(req, res, next) {
      req.body.movie = req.params.movieId;
      req.modelQuery = this.model.where('movie', req.params.movieId);
      next();
    }
  });

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};
