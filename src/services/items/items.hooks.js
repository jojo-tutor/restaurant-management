const { authenticate } = require('@feathersjs/authentication').hooks;
const populateRestaurant = require('../../hooks/populate-restaurant');

const populateCategory = require('../../hooks/populate-category');

const populateIngredient = require('../../hooks/populate-ingredient');

const populateNutrition = require('../../hooks/populate-nutrition');

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
    all: [
      populateRestaurant(),
      populateCategory(),
      populateIngredient(),
      populateNutrition()
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
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
