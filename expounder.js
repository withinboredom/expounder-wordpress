;(function (global) {

  'use strict';

  var Expounder;

  function expounderFactory() {

    document.addEventListener('DOMContentLoaded', function() {

      var elements = document.querySelectorAll('span[data-expounder]');

      for(var index = 0; index < elements.length; index++) {

        elements[index].addEventListener('click', function(event) {

          event.preventDefault();

          var expoundId = this.dataset.expounder;
          var expounded = document.querySelector('*[data-expounded="' + expoundId + '"]');

          var parentNode = this.parentNode;
          var textNode = document.createTextNode(this.textContent);

          parentNode.replaceChild(textNode, this);

          expounded.className = "expounded-appear";

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
