const request = require('supertest');
const app = require('../TruffleNode');
const expect = require('expect');

let bill;

// Test Case 1
describe('GET /bills', () => {
  it('Return an empty list of Medical Bills', async () => {
    const res = await request(app).get('/bills');
    expect.expect(res.statusCode).toBe(200);
    expect.expect(res.body).toEqual([]);
  });
});

// Test Case 2
describe('POST /bills', () => {
    it('Create a new bill', async () => {
        bill = {
            patient_name: 'Shikhar G',
            patient_address: '1123 E Uni Dr, Arizona',
            hospital_name: 'St. Louis Hospital',
            date_of_service: '2021-04-13',
            bill_amount: 100
        };
        const res = await request(app)
            .post('/bills')
            .send(bill);
        expect.expect(res.statusCode).toBe(200);
        expect.expect(res.body).toEqual(bill);
    });
});

// Test Case 3
describe('GET /bills', () => {
  it('Return the previously created bill', async () => {
    const res = await request(app).get('/bills');
    expect.expect(res.statusCode).toBe(200);
    expect.expect(res.body).toEqual([bill]);
  });
});
