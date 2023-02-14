const request = require('supertest');
const app = require('../TruffleNode');
var expect = require('expect');

describe('GET /items', () => {
  it('should return an empty list of medical bills', async () => {
    const res = await request(app).get('/items');
    expect.expect(res.statusCode).toBe(200);
    expect.expect(res.body).toEqual([]);
  });
});

describe('POST /items', () => {
  it('should create a new medical bill', async () => {
    const medicalBill = {
      patientName: 'John Doe',
      patientAddress: '123 Main St',
      hospitalName: 'General Hospital',
      dateOfService: '2022-01-01',
      billAmount: 1000
    };
    const res = await request(app)
      .post('/items')
      .send(medicalBill);
      expect.expect(res.statusCode).toBe(200);
      expect.expect(res.body).toEqual(medicalBill);
  });
});
