let config = {
	client: 'mysql',
	connection: {
		database: 'employees',
		user:     'root',
		password: 'tx2d236dg'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		directory: './db/migrations',
		tableName: 'knex_migrations'
	}
};

var assert = require('power-assert');

const knex = require('knex')(config);
/* global describe,it, console */
describe('Select all from employees', function(){
	it('should return all rows of employees', function(done){
		knex.select('*').from('employees').limit(3).then(function(rows){
			assert.equal(rows.length, 2);
			// console.log(rows);
			done();
		});
	});
});