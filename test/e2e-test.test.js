import { assert } from 'chai';  // Using Assert style
import { app } from '../app.js';
import { use } from 'chai';
import superagent from 'chai-superagent';
import request from 'supertest';

use(superagent());

describe('Suite de prueba e2e para el curso', () => {
    it('should return hello world', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                console.log(res.text);
                assert.equal(res.text, "Hello world!")
                done();
            });
    });
});