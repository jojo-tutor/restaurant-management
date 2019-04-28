const app = require('../../src/app');

describe('\'nutritions\' service', () => {
  it('registered the service', () => {
    const service = app.service('nutritions');
    expect(service).toBeTruthy();
  });
});
