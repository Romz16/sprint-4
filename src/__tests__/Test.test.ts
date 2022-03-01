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
        const response = await request(app).post('/AdicionarUsuario').query({
            email: 'user@gmail.com',
            nome: 'user123'
        })
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('id')
    })

    it('should be able to change a  user', async()=>{
        const response = await request(app).put('/AlterarUsuario').query({
            email: 'user@gmail.com',
            nome: 'newuser321'
        })
        expect(response.status).toBe(200)
        
    })

    /*it('should be able to delete a  user', async()=>{
        const response = await request(app).delete('/RemoverUsuario').query({
            email: 'user@gmail.com',
        })
        expect(response.status).toBe(204)
        
    })*/


    it('should be able to create a new coordinate', async()=>{
        const response = await request(app).post('/AdicionarPonto').query({
            latitude:12345,
            longitude:87654,
            email: 'user@gmail.com',
        })
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('id')
    })

   /* it('should be able to change a  coordinate', async()=>{
        const response = await request(app).put('/AlterarPonto').query({

            email: 'user@gmail.com',
            nome: 'newuser321'
        })
        expect(response.status).toBe(200)
        
    })*/


})