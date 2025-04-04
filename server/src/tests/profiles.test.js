/**
 * Profile API Tests
 * Tests the profile endpoints using supertest
 */

const request = require('supertest');
const app = require('../server');
const { connectDatabase } = require('../config/database');

// Test data
const testProfile = {
  name: 'Test User',
  favoriteFood: 'Pizza',
  favoriteColor: 'Blue'
};

let createdProfileId;

// Connect to test database before running tests
beforeAll(async () => {
  await connectDatabase();
});

describe('Profile API', () => {
  // Test GET /api/profiles
  test('GET /api/profiles should return all profiles', async () => {
    const res = await request(app).get('/api/profiles');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  // Test POST /api/profiles
  test('POST /api/profiles should create a new profile', async () => {
    const res = await request(app)
      .post('/api/profiles')
      .send(testProfile);
      
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(testProfile.name);
    expect(res.body.favoriteFood).toBe(testProfile.favoriteFood);
    expect(res.body.favoriteColor).toBe(testProfile.favoriteColor);
    expect(res.body.likes).toBe(0);
    
    // Save ID for later tests
    createdProfileId = res.body.id;
  });

  // Test GET /api/profiles/:id
  test('GET /api/profiles/:id should return a single profile', async () => {
    const res = await request(app).get(`/api/profiles/${createdProfileId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(createdProfileId);
    expect(res.body.name).toBe(testProfile.name);
  });

  // Test PUT /api/profiles/:id
  test('PUT /api/profiles/:id should update a profile', async () => {
    const updatedProfile = {
      name: 'Updated User',
      favoriteFood: 'Sushi',
      favoriteColor: 'Green'
    };
    
    const res = await request(app)
      .put(`/api/profiles/${createdProfileId}`)
      .send(updatedProfile);
      
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(updatedProfile.name);
    expect(res.body.favoriteFood).toBe(updatedProfile.favoriteFood);
    expect(res.body.favoriteColor).toBe(updatedProfile.favoriteColor);
  });

  // Test PATCH /api/profiles/:id/like
  test('PATCH /api/profiles/:id/like should increment likes', async () => {
    const res = await request(app).patch(`/api/profiles/${createdProfileId}/like`);
    expect(res.statusCode).toBe(200);
    expect(res.body.likes).toBe(1);
  });

  // Test DELETE /api/profiles/:id
  test('DELETE /api/profiles/:id should delete a profile', async () => {
    const res = await request(app).delete(`/api/profiles/${createdProfileId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Profile deleted successfully');
    
    // Verify profile is deleted
    const getRes = await request(app).get(`/api/profiles/${createdProfileId}`);
    expect(getRes.statusCode).toBe(404);
  });
});