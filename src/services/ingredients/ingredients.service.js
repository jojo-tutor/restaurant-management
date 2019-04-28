// Initializes the `ingredients` service on path `/ingredients`
const createService = require('feathers-mongoose');
const createModel = require('../../models/ingredients.model');
const hooks = require('./ingredients.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/ingredients', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('ingredients');

  service.hooks(hooks);
};
