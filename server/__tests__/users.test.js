const request = require('supertest');
const app = require('../app');

// ✅ Mock de la función getUserByID
jest.mock('../database', () => ({
  getUserByID: jest.fn(),
}));

const { getUserByID } = require('../database');

describe('GET /users/:id', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a user when a valid ID is provided', async () => {
    const mockUser = { id: 1, name: 'John Doe' };
    getUserByID.mockResolvedValueOnce(mockUser);

    const response = await request(app).get('/users/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockUser);
    expect(getUserByID).toHaveBeenCalledWith('1'); // Verifica que se llama con el ID correcto
  });

  it('should return a 500 error when an exception occurs', async () => {
    getUserByID.mockRejectedValueOnce(new Error('Database error'));

    const response = await request(app).get('/users/2');

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ message: 'Error fetching user in /users/:id' });
    expect(getUserByID).toHaveBeenCalledWith('2');
  });
});