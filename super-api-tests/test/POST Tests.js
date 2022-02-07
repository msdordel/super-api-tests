const request = require('supertest')('https://jsonplaceholder.typicode.com');
const expect = require("chai").expect;

//This POST tests will PASS

describe('POST Test that PASSes', () => {
		it('POST /posts', () => {
			const data = {
				title: 'foo',
				body: 'bar',
				//userId: 1,
			};

			return request
			.post('/posts')
			.send(data)
			.then((res) => {
				//console.log(res);
				console.log(res.body);
				expect(res.status).to.eql(201);

			});
		});

//This POST tests will Fail

describe('POST Test that FAILs', () => {
		it('POST /posts', () => {
			const data = {
				title: 'foo',
				body: 'bar',
				//userId: 1,
			};

			return request
			.post('/posts')
			.send(data)
			.then((res) => {
				//console.log(res);
				console.log(res.body);
				expect(res.status).to.eql(300);

			});
		});
	});
})
