var request = require("supertest");
var app = require("./app");



describe("Requests the root path", function(){

	it("returns a 200 status code", function(done) {
			request(app)
			.get('/')
			.expect(200)
			.end(function(error){
			if(error) throw error;
			done();
			});
	});

});



describe("Listing cities on /cities", function(){

	it("returns a 200 status code", function(done) {
			request(app)
			.get('/public/cities')
			.expect(200, done);
	});

	it("returns Json format", function (done) {
		request(app)
		.get('/public/cities')
		.expect('Content-Type', /json/)
		.end(function(error){
			if(error) throw error;
			done();
			});
	});


});