const app = require('../../src/app');

describe('\'restaurants\' service', () => {
  it('registered the service', () => {
    const service = app.service('restaurants');
    expect(service).toBeTruthy();
  });
});
