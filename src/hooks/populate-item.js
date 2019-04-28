// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { app, method, result, params } = context;

    const data = method === 'find' ? result.data : [result];
    
    await Promise.all(data.map(async eachData => {
      if (eachData && eachData.items) {
        eachData.items = await Promise.all(eachData.items.map(async eachItem => {

          if (eachItem.item_id) {
            eachItem.item = await app.service('items').get(eachItem.item_id, params);
          } else {
            eachItem = await app.service('items').get(eachItem, params);
          }
    
          return eachItem;
        }));
    
        return eachData;
      }
    }));

    return context;
  };
};
