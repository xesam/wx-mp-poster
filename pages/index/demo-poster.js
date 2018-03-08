let Poster = require('../../poster/poster.js').Poster;

function DemoPoster(canvasId, canvasWitdh, canvasHeight, nickName, avatarLocalPath, qrPath, bgPath, examResult) {
  Poster.call(this, canvasId, canvasWitdh, canvasHeight);
  this.nickName = nickName;
  this.avatarLocalPath = avatarLocalPath;
  this.qrPath = qrPath;
  this.bgPath = bgPath;
  this.examResult = examResult;
}

(function () {
  let Super = function () { };
  Super.prototype = Poster.prototype;
  DemoPoster.prototype = new Super();
})();

DemoPoster.prototype = new Poster();

DemoPoster.prototype.onDraw = function (context, onFinish) {
  context.draw(false, () => {
    onFinish && onFinish();
  });
};

exports.DemoPoster = DemoPoster;