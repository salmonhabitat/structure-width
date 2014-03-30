[![Build Status](https://travis-ci.org/salmonhabitat/structure-width.svg?branch=master)](https://travis-ci.org/salmonhabitat/structure-width)

structure-width
===============

Estimate a bankfull width for streams and rivers in Downeast Maine based on their catchment sizes (in square miles). This module is based on a regression of over 100 projects completed in Downeast Maine. It will not be applicable elsewhere, as the physical characteristics of the landscape will be different.

Usage
-----

Install with npm:

	npm install structure-width

Require it, and use it:

	var structure = require('./index.js');
	structure(5); => 18.16
