'use-strict';

const chai = require('chai')
const chaiHttp = require('chai-http')
// chai.use(require('chai-like'));
// chai.use(require('chai-things'));

chai.use(chaiHttp)
const { expect } = chai

let server;

describe('index', () => {
  before(() => {
    server = require('../../index')
  })
  after(() => {
    server.close();
  })


  it('it respondes with data', (done) => {
    chai.request('http://localhost:4500').get('/tmdb/v3/trending/movie/week?page=1').end((error, response) => {
      expect(response).to.have.status(200);
      expect((JSON.parse(response.res.text))).to.have.property('page');
      expect((JSON.parse(response.res.text))).to.have.property('results');
      const parsed = JSON.parse(response.res.text);
      expect(parsed.results).to.be.an('array');
      expect(respo).to.be.null;

    })

    done()
  })

  let token;
  it('it gets token', (done) => {
    chai.request('http://localhost:4500').get('/tmdb/v3/authentication/token/new').end((error, response) => {
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('request_token');
      token = response.body.request_token;

      done()
    })
  })

  it('it posts data', (done) => {
    chai.request('http://localhost:4500').post('/tmdb/v3/authentication/token/validate_with_login')

      .set({ 'Content-Type': 'application/json' })
      .send({
        'username': 'jenniferthorpe',
        'password': 'tmdbpass',
        'request_token': token
      }).end((error, response) => {
        expect(response).to.have.status(200);

        done()
      })
  })

})



