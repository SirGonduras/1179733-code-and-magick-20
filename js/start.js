'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BIG_GAP = 20;
var LINE_HEIGHT = 20;
var BAR_BETWEEN = 50;
var BAR_WIDTH = 40;
var INDENT_LEFT = 40;
var barHeight = CLOUD_HEIGHT - BIG_GAP - LINE_HEIGHT - GAP - LINE_HEIGHT - LINE_HEIGHT - BIG_GAP - LINE_HEIGHT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomPercent = function (min, max) {
  return String(Math.floor(Math.random() * (max - min + 1) + min)) + '%';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + BIG_GAP, CLOUD_Y + BIG_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + BIG_GAP, CLOUD_Y + BIG_GAP + LINE_HEIGHT);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + INDENT_LEFT + (BAR_BETWEEN + BAR_WIDTH) * i, CLOUD_HEIGHT - (CLOUD_Y + BIG_GAP));
    ctx.fillText(Math.round(times[i]), CLOUD_X + INDENT_LEFT + (BAR_BETWEEN + BAR_WIDTH) * i, CLOUD_HEIGHT - (CLOUD_Y + BIG_GAP + LINE_HEIGHT + GAP + ((barHeight * times[i]) / maxTime)));

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(242, ' + getRandomPercent(0, 100) + ', 58%)';
    }
    ctx.fillRect(CLOUD_X + INDENT_LEFT + (BAR_BETWEEN + BAR_WIDTH) * i, CLOUD_HEIGHT - (CLOUD_Y + GAP + LINE_HEIGHT), BAR_WIDTH, -((barHeight * times[i]) / maxTime));
  }
};
