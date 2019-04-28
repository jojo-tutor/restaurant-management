const app = require('../../src/app');

describe('\'menus\' service', () => {
  it('registered the service', () => {
    const service = app.service('menus');
    expect(service).toBeTruthy();
  });
});
