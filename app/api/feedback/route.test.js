const request = require('supertest');
const app = require('../../../app'); // Adjust the path as necessary

describe('Feedback API', () => {
    it('should return a success message on valid feedback submission', async () => {
        const response = await request(app)
            .post('/api/feedback')
            .send({ message: 'Great service!' });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: 'Feedback received' });
    });

    it('should return an error message on invalid feedback submission', async () => {
        const response = await request(app)
            .post('/api/feedback')
            .send({}); // Sending empty feedback
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: 'Feedback message is required' });
    });
});