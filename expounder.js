;(function (global) {

	'use strict';

	var Expounder;

	function expounderFactory() {

		document.addEventListener('DOMContentLoaded', function() {

			var elements = document.querySelectorAll('*[data-expounder],*[data-expounder-c]');
			var animationEndListener = function(event) {

				if(event.target.className == 'expounded-disappear')
					event.target.className = '';
			};

			for(var index = 0; index < elements.length; index++) {

				elements[index].addEventListener('click', function(event) {

					event.preventDefault();

					var shouldContract = (typeof this.dataset.expounderC != 'undefined');

					var expoundId = this.dataset.expounder || this.dataset.expounderC;
					var expoundedItems = document.querySelectorAll('*[data-expounded="' + expoundId + '"]');
					for (var i = 0; i < expoundedItems.length; ++i) {
						var expounded = expoundedItems[i];
						if(shouldContract) {
							if(expounded.className == 'expounded-appear') {
								expounded.addEventListener('animationend', animationEndListener);
								expounded.className = 'expounded-disappear';
							} else {
								expounded.removeEventListener('animationend', animationEndListener);
								expounded.className = 'expounded-appear';
							}
						} else {
							expounded.className = 'expounded-appear';
						}
					}

					if (!shouldContract) {
						var parentNode = this.parentNode;
						var textNode = document.createTextNode(this.textContent);

						parentNode.replaceChild(textNode, this);
					}

				}, false);
			}
		}, false);
	}

	// Export
	Expounder = expounderFactory();

	// AMD
	if (typeof define === 'function' && define.amd) {

		define(function () {
			return Expounder;
		});

		// Node and other CommonJS-like environments that support module.exports
	} else if (typeof module !== 'undefined' && module.exports) {

		module.exports = Expounder;

		// Browser
	} else {
		global.Expounder = Expounder;
	}

})(this);
