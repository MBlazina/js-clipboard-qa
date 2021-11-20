
const screenShots = document.querySelectorAll('.screenshotThumbnail');
let selectedScreenshotWrapper = '';
let selectedScreenshot = '';
const modalSingleScreenshot = document.querySelector('.modal-screenshot-single');
const modalSingleScreenshotImg = document.querySelector('.modal-screenshot-single img');

screenShots.forEach(item => {
  item.addEventListener('click', event => {
    const selectedScreenshotSrc = item.getAttribute('src');
    selectedScreenshot = item;

    const isScreenshotEmpty = selectedScreenshotSrc === '';
    if (!isScreenshotEmpty) {
      openFullscreenScreenshot(selectedScreenshotSrc)
    }
  })
})

function openFullscreenScreenshot(src) {
  modalSingleScreenshot.classList.add('open');
  modalSingleScreenshotImg.src = src;
  console.log(modalSingleScreenshotImg)
}
function handleOpenSingleModal() {
  this.classList.remove('open')
}
modalSingleScreenshot.addEventListener('click', handleOpenSingleModal)


modalSingleScreenshotImg.addEventListener('wheel', function (e) {
  this.width += Math.floor(e.deltaY);
  e.preventDefault();
});

document.onpaste = function (pasteEvent) {

  var item = pasteEvent.clipboardData.items[0];

  if (item.type.indexOf("image") === 0) {
    var blob = item.getAsFile();
    var reader = new FileReader();
    reader.onload = function (event) {

      selectedScreenshot.src = event.target.result;
    };
    reader.readAsDataURL(blob);
  }
}

