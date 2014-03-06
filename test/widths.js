var test = require('tape'),
		width = require('../index.js');

test(function(t) {
	t.plan(2);
	t.equal(width(5), 18.16);
	t.equal(width(25), 31.53);
});
