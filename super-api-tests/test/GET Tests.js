const request = require('supertest')('https://jsonplaceholder.typicode.com');
const expect = require("chai").expect;

//These GET tests will PASS

describe('posts', () => {
	it('Get all posts', (done) => {
		request 
		.get('/posts/').end((err,res) => {
			console.log(err);
			//console.log(res);
			//console.log(res.body);
			console.log(res.status);
			expect(res.body.data).not.to.be.null;
			expect(res.status).to.eql(200);
			done();

		});
	});

	it('Get posts for user 1, userId 1', (done) => {
		request 
		.get('/posts/1').end((err,res) => {
			//console.log(err);
			//console.log(res.body);
			console.log(res.status);
			expect(res.body.userId).to.be.eq(1);
			expect(res.body.id).to.be.eq(1);
			expect(res.body.title).to.be.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
			expect(res.body.body).to.be.eq('quia et suscipit\n' + 'suscipit recusandae consequuntur expedita et cum\n' + 'reprehenderit molestiae ut ut quas totam\n' + 'nostrum rerum est autem sunt rem eveniet architecto');
			expect(res.status).to.eql(200);
			done();
		});

	});
 

		it('Get all posts for user 1', (done) => {
		request 
		.get('/posts?userId=1').end((err,res) => {
			console.log(err);
			//console.log(res.body);
			//console.log(res.status);
			expect(res.body.userID).not.to.be.null;
			expect(res.body.title).not.to.be.null;
			expect(res.body.body).not.to.be.null;
			expect(res.status).to.eql(200);
			done();
		});
	});

	//These GET tests will FAIL

describe('posts - this will fail', () => {
	it('Get all posts', (done) => {
		request 
		.get('/posts/').end((err,res) => {
			console.log(err);
			//console.log(res);
			//console.log(res.body);
			//console.log(res.status);
			expect(res.body.data).not.to.be.null;
			expect(res.status).to.eql(300);
			done();

		});
	});

	it('Get posts for user 1, userId 1 - this will fail', (done) => {
		request 
		.get('/posts/1').end((err,res) => {
			console.log(err);
			//console.log(res.body);
			//console.log(res.status);
			expect(res.body.userId).to.be.eq(1);
			expect(res.body.id).to.be.eq(1);
			expect(res.body.title).not.to.be.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
			expect(res.body.body).to.be.eq('quia et suscipit\n' + 'suscipit recusandae consequuntur expedita et cum\n' + 'reprehenderit molestiae ut ut quas totam\n' + 'nostrum rerum est autem sunt rem eveniet architecto');
			expect(res.status).to.eql(200);
			done();
		});

	});
 

		it('Get all posts for user 1 - this will fail', (done) => {
		request 
		.get('/posts?userId=1').end((err,res) => {
			console.log(err);
			//console.log(res.body);
			//console.log(res.status);
			expect(res.body.userID).not.to.be.null;
			expect(res.body.title).not.to.be.null;
			expect(res.body.body).to.be.null;
			expect(res.status).to.eql(200);
			done();
		});
	});
 });
})