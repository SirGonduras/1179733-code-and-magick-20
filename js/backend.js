'use strict';
(function () {
  var URLSave = 'https://javascript.pages.academy/code-and-magick';
  var URLLoad = 'https://javascript.pages.academy/code-and-magick/data';
  var TIMEOUT_IN_MS = 10000;

  var StatusCode = {
    OK: 200
  };

  window.load = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', URLLoad);
    xhr.send();
  };

  var save = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.open('POST', URLSave);
    xhr.send(data);
  };

  window.backend = {
    save: save
  };
})();
