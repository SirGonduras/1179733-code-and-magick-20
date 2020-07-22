'use strict';

(function () {
  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  var startPopupX = 0;
  var startPopupY = 0;
  var setup = document.querySelector('.setup');

  window.main = {
    setup: setup,
    startPopupX: startPopupX,
    startPopupY: startPopupY,
    getRandomNumber: getRandomNumber
  };

  window.main.setup.querySelector('.setup-similar').classList.remove('hidden');
})();

