'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var canvas = document.getElementsByTagName('canvas')[0];
  var ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.getElementById('projects').style.marginTop = window.innerHeight;

  var Tesseract = function () {
    function Tesseract(o) {
      _classCallCheck(this, Tesseract);

      this._canvas = o.canvas;
      this._ctx = this._canvas.getContext('2d');

      this.ox = o.ox || 0;
      this.oy = o.oy || 0;

      this.dim = o.dim || 100;
      this.rotX = o.rotX || 0;
      this.rotY = o.rotY || 0;
      this.rotZ = o.rotZ || 0;
      this.rotX2 = o.rotX2 || 0;
      this.rotY2 = o.rotY2 || 0;
      this.rotZ2 = o.rotZ2 || 0;
      this.zScale = o.zScale || 1;

      this.color = o.color || 'red';
      this.lineWidth = o.lineWidth || 1;

      this._vertices = this._generateVertices();

      this.bgGradient = this._ctx.createLinearGradient(0, 0, 0, this._canvas.height);
      this.bgGradient.addColorStop(0, 'rgba(255,255,255, 0.1)');
      this.bgGradient.addColorStop(0.3, 'rgba(255,255,255, 0.06)');
      this.bgGradient.addColorStop(0.4, 'rgba(255,255,255, 0.03)');
      this.bgGradient.addColorStop(0.6, 'rgba(255,255,255, 0.02)');
      this.bgGradient.addColorStop(0.7, 'rgba(255,255,255, 0.06)');
      this.bgGradient.addColorStop(1, 'rgba(255,255,255, 0.5)');
    }

    _createClass(Tesseract, [{
      key: '_generateVertices',
      value: function _generateVertices() {
        var ox = this.ox; // origin x
        var oy = this.oy; // origin y
        var dim = this.dim; // dimension (length of one edge)
        var rotX = this.rotX; // x rotation
        var rotY = this.rotY; // y rotation
        var rotZ = this.rotZ; // z rotation
        var rotX2 = this.rotX2; // x rotation
        var rotY2 = this.rotY2; // y rotation
        var rotZ2 = this.rotZ2; // z rotation
        var zScale = this.zScale;

        var p2dx = Math.cos(rotX) * dim * 0.5; // plane 2 displacement x
        var p2dy = Math.sin(rotY) * dim * 0.5; // plane 2 displacement y
        var p3dx = Math.cos(rotZ) * dim * 0.5 * zScale; // plane 2 displacement x
        var p3dy = Math.sin(rotZ) * dim * 0.5 * zScale; // plane 2 displacement y
        var p4dx = Math.cos(rotX2) * dim * 0.5 * zScale; // plane 2 displacement x
        var p4dy = Math.sin(rotY2) * dim * 0.5 * zScale; // plane 2 displacement y


        var vertices = [[ox, oy], [ox + dim, oy], [ox + dim, oy + dim], [ox, oy + dim], [ox + p2dx, oy + p2dy], [ox + dim + p2dx, oy + p2dy], [ox + dim + p2dx, oy + dim + p2dy], [ox + p2dx, oy + dim + p2dy], [ox + p3dx * zScale, oy + p3dy * zScale], [ox + (dim + p3dx) * zScale, oy + p3dy * zScale], [ox + (dim + p3dx) * zScale, oy + (dim + p3dy) * zScale], [ox + p3dx * zScale, oy + (dim + p3dy) * zScale], [ox + (p3dx + p4dx) * zScale, oy + (p3dy + p4dy) * zScale], [ox + (dim + p3dx + p4dx) * zScale, oy + (p3dy + p4dy) * zScale], [ox + (dim + p3dx + p4dx) * zScale, oy + (dim + p3dy + p4dy) * zScale], [ox + (p3dx + p4dx) * zScale, oy + (dim + p3dy + p4dy) * zScale]];

        return vertices;
      }

      /* ------------- */
      /* -- Drawing -- */
      /* ------------- */

    }, {
      key: 'draw',
      value: function draw() {
        var canvas = this._canvas;
        var ctx = this._ctx;
        var v = this._generateVertices();

        ctx.beginPath();

        // first cube
        ctx.moveTo(v[0][0], v[0][1]);
        ctx.lineTo(v[1][0], v[1][1]);
        ctx.moveTo(v[1][0], v[1][1]);
        ctx.lineTo(v[2][0], v[2][1]);
        ctx.moveTo(v[2][0], v[2][1]);
        ctx.lineTo(v[3][0], v[3][1]);
        ctx.moveTo(v[3][0], v[3][1]);
        ctx.lineTo(v[0][0], v[0][1]);

        ctx.moveTo(v[4][0], v[4][1]);
        ctx.lineTo(v[5][0], v[5][1]);
        ctx.moveTo(v[5][0], v[5][1]);
        ctx.lineTo(v[6][0], v[6][1]);
        ctx.moveTo(v[6][0], v[6][1]);
        ctx.lineTo(v[7][0], v[7][1]);
        ctx.moveTo(v[7][0], v[7][1]);
        ctx.lineTo(v[4][0], v[4][1]);

        ctx.moveTo(v[0][0], v[0][1]);
        ctx.lineTo(v[4][0], v[4][1]);
        ctx.moveTo(v[1][0], v[1][1]);
        ctx.lineTo(v[5][0], v[5][1]);
        ctx.moveTo(v[2][0], v[2][1]);
        ctx.lineTo(v[6][0], v[6][1]);
        ctx.moveTo(v[3][0], v[3][1]);
        ctx.lineTo(v[7][0], v[7][1]);

        // second cube
        ctx.moveTo(v[8][0], v[8][1]);
        ctx.lineTo(v[9][0], v[9][1]);
        ctx.moveTo(v[9][0], v[9][1]);
        ctx.lineTo(v[10][0], v[10][1]);
        ctx.moveTo(v[10][0], v[10][1]);
        ctx.lineTo(v[11][0], v[11][1]);
        ctx.moveTo(v[11][0], v[11][1]);
        ctx.lineTo(v[8][0], v[8][1]);

        ctx.moveTo(v[12][0], v[12][1]);
        ctx.lineTo(v[13][0], v[13][1]);
        ctx.moveTo(v[13][0], v[13][1]);
        ctx.lineTo(v[14][0], v[14][1]);
        ctx.moveTo(v[14][0], v[14][1]);
        ctx.lineTo(v[15][0], v[15][1]);
        ctx.moveTo(v[15][0], v[15][1]);
        ctx.lineTo(v[12][0], v[12][1]);

        ctx.moveTo(v[8][0], v[8][1]);
        ctx.lineTo(v[12][0], v[12][1]);
        ctx.moveTo(v[9][0], v[9][1]);
        ctx.lineTo(v[13][0], v[13][1]);
        ctx.moveTo(v[10][0], v[10][1]);
        ctx.lineTo(v[14][0], v[14][1]);
        ctx.moveTo(v[11][0], v[11][1]);
        ctx.lineTo(v[15][0], v[15][1]);

        // connect the two cubes
        ctx.moveTo(v[0][0], v[0][1]);
        ctx.lineTo(v[8][0], v[8][1]);
        ctx.moveTo(v[1][0], v[1][1]);
        ctx.lineTo(v[9][0], v[9][1]);
        ctx.moveTo(v[2][0], v[2][1]);
        ctx.lineTo(v[10][0], v[10][1]);
        ctx.moveTo(v[3][0], v[3][1]);
        ctx.lineTo(v[11][0], v[11][1]);

        ctx.moveTo(v[4][0], v[4][1]);
        ctx.lineTo(v[12][0], v[12][1]);
        ctx.moveTo(v[5][0], v[5][1]);
        ctx.lineTo(v[13][0], v[13][1]);
        ctx.moveTo(v[6][0], v[6][1]);
        ctx.lineTo(v[14][0], v[14][1]);
        ctx.moveTo(v[7][0], v[7][1]);
        ctx.lineTo(v[15][0], v[15][1]);

        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.color;
        ctx.stroke();

        ctx.fillStyle = this.color;

        for (var i = 0; i < 16; i++) {
          ctx.beginPath();
          ctx.arc(v[i][0], v[i][1], this.lineWidth * 3, 0, 2 * Math.PI);
          ctx.fill();
        }

        ctx.fillStyle = this.bgGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = this.bgGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }]);

    return Tesseract;
  }();

  /* --- end Tesseract class definition --- */

  var tesseracts = [];
  var animationIsRunning = true,
      resumeAnimationTimeoutIsSet = false;

  function createTesseracts(numTesseracts) {
    for (var i = 0; i < numTesseracts; i++) {
      var basicColor = Math.trunc(Math.random() * 200);
      var newT = new Tesseract({
        canvas: canvas,
        ox: Math.random() * canvas.width,
        oy: canvas.height / 2,
        dim: Math.random() * 200 + 100,
        rotX: 5,
        rotY: 1,
        rotZ: 0.5,
        zScale: Math.random() + 0.5,
        color: 'rgb(' + basicColor + ',' + basicColor + ',' + basicColor + ')',
        lineWidth: Math.trunc(Math.random() * 2)
      });

      newT.xStep = 0;
      newT.yStep = Math.random() * -1 - 0.5;
      newT.rotXStep = Math.random() * 0.02 - 0.01;
      newT.rotYStep = Math.random() * 0.02 - 0.01;
      newT.rotZStep = Math.random() * 0.02 - 0.01;
      newT.rotX2Step = Math.random() * 0.02 - 0.01;
      newT.rotY2Step = Math.random() * 0.02 - 0.01;
      newT.rotZ2Step = Math.random() * 0.02 - 0.01;
      newT.zScaleStep = Math.random() * 0.0001 - 0.0002;

      tesseracts.push(newT);
    }
  }

  var prevTime = Date.now();
  function animateTesseracts(nowTime) {
    var stepInterval = nowTime - prevTime;

    if (Math.random() > 0.99 && tesseracts.length < 20 || tesseracts.length < 3) {
      createTesseracts(Math.random() * 4);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < tesseracts.length; i++) {
      tesseracts[i].ox += tesseracts[i].xStep;
      tesseracts[i].oy += tesseracts[i].yStep;
      tesseracts[i].rotX += tesseracts[i].rotXStep;
      tesseracts[i].rotY += tesseracts[i].rotYStep;
      tesseracts[i].rotZ += tesseracts[i].rotZStep;
      tesseracts[i].rotX2 += tesseracts[i].rotX2Step;
      tesseracts[i].rotY2 += tesseracts[i].rotY2Step;
      tesseracts[i].rotZ2 += tesseracts[i].rotZ2Step;
      tesseracts[i].zScale += tesseracts[i].zScaleStep;
      tesseracts[i].draw();

      if (tesseracts[i].oy < 0 - tesseracts[i].dim || tesseracts[i].oy > tesseracts[i].height || tesseracts[i].ox > tesseracts[i].width || tesseracts[i].ox < 0 - tesseracts[i].dim) {
        tesseracts.splice(i, 1);
      }
    }

    if (animationIsRunning === true) window.requestAnimationFrame(animateTesseracts);
  }

  createTesseracts(10);
  animateTesseracts();

  window.addEventListener('scroll', throttlePauseAnimation);
  function throttlePauseAnimation() {
    window.requestAnimationFrame(pauseAnimation);
  }
  function pauseAnimation() {
    animationIsRunning = false;

    if (resumeAnimationTimeoutIsSet === false) {
      resumeAnimationTimeoutIsSet = true;
      window.setTimeout(function () {
        animationIsRunning = true;
        animateTesseracts();
        resumeAnimationTimeoutIsSet = false;
      }, 100);
    }
  }

  var mouseX = void 0,
      mouseY = void 0;
  window.addEventListener('mousemove', throttleMove);
  function throttleMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    window.requestAnimationFrame(mouseMove);
  }
  function mouseMove() {
    tesseracts.forEach(function (t) {
      t.xStep += (mouseX - t.ox) * Math.random() * 0.0003;
      t.yStep = (mouseY - t.oy) * Math.random() * 0.0055;
    });
  }

  window.addEventListener('resize', throttleResize);

  function throttleResize() {
    window.requestAnimationFrame(resizeCanvas);
  }
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
})();