/**
 * xesamguo@gmail.com
*/
function Poster(canvasId, canvasWitdh, canvasHeight) {
  this.canvasId = canvasId;
  this.canvasWitdh = canvasWitdh;
  this.canvasHeight = canvasHeight;
}

Poster.prototype.draw = function (onSuccess, onFail) {
  let context = wx.createCanvasContext(this.canvasId);
  context.clearRect(0, 0, this.canvasWitdh, this.canvasHeight);
  this.onDraw(context, () => {
    setTimeout(() => {
      wx.hideLoading();
      wx.canvasToTempFilePath({
        canvasId: this.canvasId,
        success(res) {
          let tempFilePath = res.tempFilePath;
          onSuccess && onSuccess(tempFilePath);
        },
        fail() {
          onFail && onFail();
        }
      });
    }, 300);
  });
};

Poster.prototype.onDraw = function (context, onFinish) {

};

Poster.prototype.sysPreview = function (imgPath, onSuccess, onFail) {
  wx.previewImage({
    urls: [imgPath],
    success() {

    },
    fail() {
      onFail && onFail();
    }
  });
};

Poster.prototype.localPreview = function (imgPath) {
  //todo
};

exports.Poster = Poster;