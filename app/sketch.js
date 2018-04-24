var gridSpacing = 100
var px, py, x , y;

var speed = 30;
var video;
var target;

function setup() {
  background(0)
  createStereoCanvas(WEBGL, 50);

  // var video = createCapture({video: {facingMode: {exact: "environment"}}});
  video = createCapture(VIDEO);

  // var cWidth = document.getElementById('defaultCanvas0').style.width;
  // var cHeight = document.getElementById('defaultCanvas0').style.height;
  console.log(video)
  video.size(window.innerWidth, window.innerHeight);
  video.id('p5video');
  video.elt.style.opacity = "0";
  // video.elt.style.height = cHeight;
  // video.elt.style.width = cWidth;
  // video.elt.setAttribute('width', cWidth);
  // video.elt.setAttribute('height', cHeight);

  var seriously = new Seriously();
  var src = seriously.source('#p5video');
  target = seriously.target('#defaultCanvas0');
  console.log(target);
  var blur = seriously.effect('blur');

  blur.source = src;
  target.source = blur;

  seriously.go();
  // x = width / 2
  // y = height / 2;
}

function draw() {
  // VRorbitControl();

  updateStereo();
  // image(video, 0, 0);
  // image(target, width, 0, width, height);
}