// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { app, method, result, params } = context;

    const data = method === 'find' ? result.data : [result];

    await Promise.all(data.map(async eachData => {
      if (eachData && eachData.nutritions) {
        eachData.nutritions = await Promise.all(eachData.nutritions.map(async nutrition => {
          nutrition = await app.service('nutritions').get(nutrition, params);
  
          return nutrition;
        }));
      }

      return eachData;
    }));

    return context;
  };
};
