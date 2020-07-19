'use strict';

(function () {
  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  var setup = document.querySelector('.setup');

  window.main = {
    setup: setup,
    getRandomNumber: getRandomNumber
  };

  window.main.setup.querySelector('.setup-similar').classList.remove('hidden');
})();

