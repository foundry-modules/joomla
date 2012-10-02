/**
 * joomla
 * Abstraction layer for Joomla client-side API.
 * https://github.com/foundry-modules/joomla
 *
 * Copyright (c) 2012 Jason Ramos
 * www.stackideas.com
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

var self = $.Joomla = function(method, args) {

	// Overriding function
	if ($.isFunction(args)) {

		var fn = args;

		if (self.version > 1.5) {
			window.Joomla[method] = fn;
		} else {
			window[method] = fn;
		};

		return;
	}

	// Calling function
	var method = (self.version > 1.5) ? window.Joomla[method] : window[method];

	if ($.isFunction(method)) {
		return method.apply(window, args);
	}
}
