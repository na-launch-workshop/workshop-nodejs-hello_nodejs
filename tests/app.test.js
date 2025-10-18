const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('returns the English translation with a timestamp by default', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/text\/plain/);
    expect(response.text).toMatch(/hello world/i);
    expect(response.text).toMatch(/@\s*\d{4}-\d{2}-\d{2}T/);
  });
});