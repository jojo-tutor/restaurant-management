// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { app, method, result, params } = context;

    const data = (method === 'find')  ? result.data : [result];

    await Promise.all(data.map(async eachData => {
      if (eachData.restaurant_id) {
        eachData.restaurant = await app.service('restaurants').get(eachData.restaurant_id, params);
      }
    }));

    return context;
  };
};
