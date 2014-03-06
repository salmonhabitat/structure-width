structure-width
===============

`structure-width` estimates a bankfull width for streams and rivers in Downeast Maine based on their catchment sizes (in square miles).

Usage
-----

Install the module:

		npm install structure-width

Require it:

		var structure = require('./index.js');

Use it:

		structure(5); => 18.16

Where this is applicable
------------------------

This module is based on a regression of over 100 projects **completed in Downeast Maine**. It's a low gradient, glacier dominated landscape, and as such, will not be applicable elsewhere.
