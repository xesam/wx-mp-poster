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
  context.setFillStyle("#e4e4e4");
  context.fillRect(0, 0, this.canvasWitdh, this.canvasHeight);
  context.save();
  context.translate(50, 50);
  context.setStrokeStyle("#00ff00");
  context.setLineWidth(5);
  context.rect(0, 0, 200, 200);
  context.stroke();
  context.setStrokeStyle("#ff0000");
  context.setLineWidth(2);
  context.moveTo(160, 100);
  context.arc(100, 100, 60, 0, 2 * Math.PI, true);
  context.moveTo(140, 100);
  context.arc(100, 100, 40, 0, Math.PI, false);
  context.moveTo(85, 80);
  context.arc(80, 80, 5, 0, 2 * Math.PI, true);
  context.moveTo(125, 80);
  context.arc(120, 80, 5, 0, 2 * Math.PI, true);
  context.stroke();
  context.restore();
  context.draw(false, () => {
    onFinish && onFinish();
  });
};

exports.DemoPoster = DemoPoster;