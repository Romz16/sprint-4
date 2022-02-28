import request from 'supertest';

import { getConnection } from 'typeorm';

import { app } from '../app';

import { createConnection } from 'typeorm';


describe('User',()=>{
    beforeAll(async()=>{
        const connection = await createConnection()

        await connection.runMigrations()
    })

    afterAll(async()=>{
        const connection = getConnection()

        await connection.dropDatabase()

        await connection.close()
    })

    it('should be able to create a new user', async()=>{
        const response = await request(app).post('/AdicionarUsuario').send({
            email: 'user@gmail.com'
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('id')
    })
})