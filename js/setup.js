'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var getWizardsName = function (wizNames, wizSurnames) {
  var name = wizNames[getRandomNumber(0, wizNames.length - 1)];
  var surname = wizSurnames[getRandomNumber(0, wizSurnames.length - 1)];

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

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = [
  {
    name: getWizardsName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getArrayElement(COAT_COLOR),
    eyeColor: getArrayElement(EYE_COLOR)
  },
  {
    name: getWizardsName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getArrayElement(COAT_COLOR),
    eyeColor: getArrayElement(EYE_COLOR)
  },
  {
    name: getWizardsName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getArrayElement(COAT_COLOR),
    eyeColor: getArrayElement(EYE_COLOR)
  },
  {
    name: getWizardsName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getArrayElement(COAT_COLOR),
    eyeColor: getArrayElement(EYE_COLOR)
  }
];

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
