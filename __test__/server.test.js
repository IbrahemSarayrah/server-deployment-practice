'use strict';

const supertest = require('supertest')
const server = require('../server')
const request = supertest(server.app)

describe ('express server' , ()=> {
    it('shoud check the Working... works successfully', async()=> {
        //arange
        let param = '/';
        let status = 200;
        let text = 'Working...'

        //act 
        const response = await request.get(param);
    
        // assert
        expect(response.status).toBe(status);
        expect(response.text).toBe(text)
    })

    it('shoud check the data it works successfully', async()=> {
        //arange
        let param = '/data'
        let status = 200;
        let output = {
            10 : 'Number',
            name : 'String',
            time : new Date().toDateString()
        }
        //act 
        const response = await request.get(param)

        // assert
        expect(response.status).toBe(status);
        expect(response.body).toMatchObject(output)
    })

    it('should check 500 errors', async()=> {
        //arange
        let param = '/bad';
        let status = 500;

        //act 
        const response = await request.get(param)

        // assert
        expect(response.status).toBe(status);
        expect(response.body.route).toBe(param)
    })

    it('shoud check 404 errors', async()=> {
        //arange

        let param = '/notfound';
        let status = 404;

        //act
        const response = await request.get(param);

        // assert
        expect(response.status).toBe(status);
    })
    
})