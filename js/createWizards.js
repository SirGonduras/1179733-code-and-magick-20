'use strict';

(function () {
  //  Consants
  // var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORES = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYE_COLORES = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORES = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_NUMBER = 4;

  window.createWizards = {
    EYE_COLORES: EYE_COLORES,
    COAT_COLORES: COAT_COLORES,
    FIREBALL_COLORES: FIREBALL_COLORES
  };
  //  Functions

  // var getWizardsName = function (wizardNames, wizardSurnames) {
  //   var name = wizardNames[window.main.getRandomNumber(0, wizardNames.length - 1)];
  //   var surname = wizardSurnames[window.main.getRandomNumber(0, wizardSurnames.length - 1)];

  //   if (window.main.getRandomNumber(1, 2) === 1) {
  //     return name + ' ' + surname;
  //   } else {
  //     return surname + ' ' + name;
  //   }
  // };

  // var getArrayElement = function (array) {
  //   return array[window.main.getRandomNumber(0, array.length - 1)];
  // };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // Variables
  // var wizards = [];
  var fragment = document.createDocumentFragment();
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = window.main.setup.querySelector('.setup-similar-list');

  // Code
  // for (var i = 0; i < WIZARD_NUMBER; i++) {
  //   var wizard = {
  //     name: getWizardsName(WIZARD_NAMES, WIZARD_SURNAMES),
  //     coatColor: getArrayElement(COAT_COLORES),
  //     eyeColor: getArrayElement(EYE_COLORES)
  //   };
  //   wizards[i] = wizard;
  // }

  // wizards.forEach(function (item) {
  //   fragment.appendChild(renderWizard(item));
  // });

  similarListElement.appendChild(fragment);
  var successHandler = function (wizards) {
    console.log(wizards);
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    window.main.setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);

})();
