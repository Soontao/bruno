const jsonToToml = require('../../src/jsonToToml');

const json = {
  meta: {
    name: 'Get users',
    type: 'http',
    seq: '1'
  },
  http: {
    method: 'get',
    url: 'https://reqres.in/api/users'
  }
};

const toml = `[meta]
name = 'Get users'
type = 'http'
seq = '1'

[http]
method = 'get'
url = 'https://reqres.in/api/users'
`;

describe('jsonToToml - simple get', () => {
  it('should parse the json', () => {
    expect(jsonToToml(json)).toEqual(toml);
  });
});
