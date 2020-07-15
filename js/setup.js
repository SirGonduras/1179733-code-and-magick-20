'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORES = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORES = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_NUMBER = 4;
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var getWizardsName = function (wizardNames, wizardSurnames) {
  var name = wizardNames[getRandomNumber(0, wizardNames.length - 1)];
  var surname = wizardSurnames[getRandomNumber(0, wizardSurnames.length - 1)];

  if (getRandomNumber(1, 2) === 1) {
    return name + ' ' + surname;
  } else {
    return surname + ' ' + name;
  }
};

var getArrayElement = function (array) {
  return array[getRandomNumber(0, array.length - 1)];
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
};

var setup = document.querySelector('.setup');

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = [];
for (var i = 0; i < WIZARD_NUMBER; i++) {
  var wizard = {
    name: getWizardsName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getArrayElement(COAT_COLORES),
    eyeColor: getArrayElement(EYE_COLORES)
  };

  wizards[i] = wizard;
}

var fragment = document.createDocumentFragment();

wizards.forEach(function (item) {
  fragment.appendChild(renderWizard(item));
});

similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');


var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

var changeColorCoat = function () {
  wizardCoat.style.fill = COAT_COLORES [getRandomNumber(0, COAT_COLORES.length)];
};

var changeColorEyes = function () {
  wizardEyes.style.fill = EYE_COLORES [getRandomNumber(0, EYE_COLORES.length)];
};

var changeColorFirebal = function () {
  setupFireballWrap.style.backgroundColor = FIREBALL_COLORES [getRandomNumber(0, FIREBALL_COLORES.length)];
};


var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && !(setupUserName === document.activeElement)) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  wizardCoat.addEventListener('click', changeColorCoat);
  wizardEyes.addEventListener('click', changeColorEyes);
  setupFireballWrap.addEventListener('click', changeColorFirebal);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
  wizardCoat.removeEventListener('click', changeColorCoat);
  wizardEyes.removeEventListener('click', changeColorEyes);
  setupFireballWrap.removeEventListener('click', changeColorFirebal);
};

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

