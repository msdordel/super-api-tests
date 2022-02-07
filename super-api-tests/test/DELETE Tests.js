const request = require('supertest')('https://jsonplaceholder.typicode.com');
const expect = require("chai").expect;

//This DELETE test will PASS

describe('Delete Tests that passes', () => {
		it('DELETE/data', () => {
			return request
			.delete('/posts/1')
			.then((res) => {
				console.log(res.status);
				console.log(res.body);
				expect(res.status).to.eql(200);
			});
		});

//This DELETE test will FAIL

describe('Delete Tests that fails', () => {
		it('DELETE/data', () => {
			return request
			.delete('/posts/1')
			.then((res) => {
				console.log(res.status);
				console.log(res.body);
				expect(res.status).to.eql(300);
			});
		});
	});
})