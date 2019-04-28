// Initializes the `nutritions` service on path `/nutritions`
const createService = require('feathers-mongoose');
const createModel = require('../../models/nutritions.model');
const hooks = require('./nutritions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/nutritions', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('nutritions');

  service.hooks(hooks);
};
