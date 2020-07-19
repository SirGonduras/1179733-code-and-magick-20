'use strict';

(function () {
  //  Consants
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  //  Functions
  var changeColorCoat = function () {
    wizardCoat.style.fill = window.createWizards.COAT_COLORES [window.main.getRandomNumber(0, window.createWizards.COAT_COLORES.length)];
  };

  var changeColorEyes = function () {
    wizardEyes.style.fill = window.createWizards.EYE_COLORES [window.main.getRandomNumber(0, window.createWizards.EYE_COLORES.length)];
  };

  var changeColorFirebal = function () {
    setupFireballWrap.style.backgroundColor = window.createWizards.FIREBALL_COLORES [window.main.getRandomNumber(0, window.createWizards.FIREBALL_COLORES.length)];
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && !(setupUserName === document.activeElement)) {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    window.main.setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
    wizardCoat.addEventListener('click', changeColorCoat);
    wizardEyes.addEventListener('click', changeColorEyes);
    setupFireballWrap.addEventListener('click', changeColorFirebal);
  };

  var closePopup = function () {
    window.main.setup.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
    wizardCoat.removeEventListener('click', changeColorCoat);
    wizardEyes.removeEventListener('click', changeColorEyes);
    setupFireballWrap.removeEventListener('click', changeColorFirebal);
  };

  // Variables
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.main.setup.querySelector('.setup-close');
  var setupUserName = window.main.setup.querySelector('.setup-user-name');

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  // Events
  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });

  setupUserName.addEventListener('invalid', function () {
    if (setupUserName.validity.valueMissing) {
      setupUserName.setCustomValidity('Обязательное поле');
    } else {
      setupUserName.setCustomValidity('');
    }
  });

  setupUserName.addEventListener('input', function () {
    var valueLength = setupUserName.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      setupUserName.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > MAX_NAME_LENGTH) {
      setupUserName.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
    } else {
      setupUserName.setCustomValidity('');
    }
  });
})();
