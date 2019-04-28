const restaurants = require('./restaurants/restaurants.service.js');
const categories = require('./categories/categories.service.js');
const ingredients = require('./ingredients/ingredients.service.js');
const nutritions = require('./nutritions/nutritions.service.js');
const items = require('./items/items.service.js');
const menus = require('./menus/menus.service.js');
const orders = require('./orders/orders.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(restaurants);
  app.configure(categories);
  app.configure(ingredients);
  app.configure(nutritions);
  app.configure(items);
  app.configure(menus);
  app.configure(orders);
  app.configure(users);
};
