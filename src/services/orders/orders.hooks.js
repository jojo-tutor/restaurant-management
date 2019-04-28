const { authenticate } = require('@feathersjs/authentication').hooks;
const populateRestaurant = require('../../hooks/populate-restaurant');

const populateItem = require('../../hooks/populate-item');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populateRestaurant()],
    find: [],
    get: [populateItem()],
    create: [populateItem()],
    update: [populateItem()],
    patch: [populateItem()],
    remove: [populateItem()]
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
