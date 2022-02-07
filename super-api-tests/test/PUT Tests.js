const request = require('supertest')('https://jsonplaceholder.typicode.com');
const expect = require("chai").expect;

//This PUT tests will PASS

		it('PUT test that passes', () => {
			const data = {
				title: 'foo',
				body: 'bar',
				userId: 1,
			};

			return request
			.put('/posts/1')
			.send(data)
			.then((res) => {
				console.log(res.status);
				console.log(res.body);
				expect(res.status).to.eql(200);

			});
		});

//This PUT tests will FAIL

		it('PUT test that fails', () => {
			const data = {
				title: 'foo',
				body: 'bar',
				userId: 1,
			};

			return request
			.put('/posts/3333')
			.send(data)
			.then((res) => {
				console.log(res.status);
				console.log(res.body);
				expect(res.status).to.eql(200);

			});
		});