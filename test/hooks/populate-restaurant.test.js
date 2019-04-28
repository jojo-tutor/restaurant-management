const feathers = require('@feathersjs/feathers');
const populateRestaurant = require('../../src/hooks/populate-restaurant');

describe('\'populate-restaurant\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.use('/restaurants', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      after: populateRestaurant()
    });
  });

  it('runs the hook', async () => {
    expect.assertions(1);
    const result = await app.service('dummy').get('test');
    expect(result).toEqual({ id: 'test' });
  });
});
