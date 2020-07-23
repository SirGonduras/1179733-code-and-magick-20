'use strict';
(function () {
  var URL = 'https://javascript.pages.academy/code-and-magick';

  var save = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.backend = {
    save: save
  };
})();
