// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { app, method, result, params } = context;

    const data = method === 'find' ? result.data : [result];

    await Promise.all(data.map(async eachData => {
      if (eachData && eachData.categories) {
        eachData.categories = await Promise.all(eachData.categories.map(async category => {
          category = await app.service('categories').get(category, params);
  
          return category;
        }));
      }

      return eachData;
    }));

    return context;
  };
};
