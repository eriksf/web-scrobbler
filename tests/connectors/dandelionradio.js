'use strict';

module.exports = function(driver, connectorSpec) {
	connectorSpec.shouldLoadWebsite(driver, {
		url: 'https://www.dandelionradio.com/player.htm'
	});
};
