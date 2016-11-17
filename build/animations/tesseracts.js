'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var canvas = document.getElementById('backgroundCanvas');
  var ctx = canvas.getContext('2d');

  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;

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
      this.zScale = o.zScale || 1;

      this.color = o.color || '#0f0';
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
        var zScale = this.zScale;

        var p2dx = Math.cos(rotX) * dim * 0.5; // plane 2 displacement x
        var p2dy = Math.sin(rotY) * dim * 0.5; // plane 2 displacement y
        var p3dx = Math.cos(rotZ) * dim * 0.5 * zScale; // plane 2 displacement x
        var p3dy = Math.sin(rotZ) * dim * 0.5 * zScale; // plane 2 displacement y
        var p4dx = Math.cos(rotX) * dim * 0.5 * zScale; // plane 2 displacement x
        var p4dy = Math.sin(rotY) * dim * 0.5 * zScale; // plane 2 displacement y


        var vertices = [[ox, oy], [ox + dim, oy], [ox + dim, oy + dim], [ox, oy + dim], [ox + p2dx, oy + p2dy], [ox + dim + p2dx, oy + p2dy], [ox + dim + p2dx, oy + dim + p2dy], [ox + p2dx, oy + dim + p2dy], [ox + p3dx * zScale, oy + p3dy * zScale], [ox + (dim + p3dx) * zScale, oy + p3dy * zScale], [ox + (dim + p3dx) * zScale, oy + (dim + p3dy) * zScale], [ox + p3dx * zScale, oy + (dim + p3dy) * zScale], [ox + (p3dx + p4dx) * zScale, oy + (p3dy + p4dy) * zScale], [ox + (dim + p3dx + p4dx) * zScale, oy + (p3dy + p4dy) * zScale], [ox + (dim + p3dx + p4dx) * zScale, oy + (dim + p3dy + p4dy) * zScale], [ox + (p3dx + p4dx) * zScale, oy + (dim + p3dy + p4dy) * zScale]];

        return vertices;
      }

      /* ------------- */
      /* -- Drawing -- */
      /* ------------- */

    }, {
      key: 'draw',
      value: function draw() {
        var ctx = this._ctx;
        var v = this._generateVertices();

        ctx.fillStyle = 'green';

        ctx.arc(v[0][0], v[0][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[1][0], v[1][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[2][0], v[2][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[3][0], v[3][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[4][0], v[4][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[5][0], v[5][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[6][0], v[6][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[7][0], v[7][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[8][0], v[8][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[9][0], v[9][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[10][0], v[10][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[11][0], v[11][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[12][0], v[12][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[13][0], v[13][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[14][0], v[14][1], 3, 0, 2 * Math.PI);
        ctx.arc(v[15][0], v[15][1], 3, 0, 2 * Math.PI);

        ctx.stroke();

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

        ctx.lineWidth = 2;
        ctx.strokeStyle = this.color;
        ctx.stroke();
      }
    }]);

    return Tesseract;
  }();

  var tesseracts = [];

  function createTesseracts(numTesseracts) {
    for (var i = 0; i < numTesseracts; i++) {
      var newT = new Tesseract({
        canvas: canvas,
        ox: Math.random() * canvas.width,
        oy: Math.random() * canvas.width,
        dim: Math.random() * 50,
        rotX: Math.random(),
        rotY: Math.random(),
        rotZ: Math.random(),
        zScale: 0.9
      });

      newT.age = 0;
      newT.lifeLength = Math.random() * 1000;
      newT.dimStep = Math.random() * 5;
      newT.xStep = Math.random() * -1 - 0.5;
      newT.yStep = Math.random() * -1 - 0.5;
      newT.rotXStep = Math.random() * 0.01;
      newT.rotYStep = Math.random() * 0;
      newT.rotZStep = Math.random() * 0.01;

      tesseracts.push(newT);
    }
  }

  var prevTime = Date.now();
  function animateTesseracts(nowTime) {
    var stepInterval = nowTime - prevTime;

    if (Math.random() > 0.999) {
      createTesseracts(Math.random() * 10);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < tesseracts.length; i++) {
      var basicColor = 255 - Math.floor(Math.sin(Math.PI * (tesseracts[i].age / tesseracts[i].lifeLength)) * 100);

      tesseracts[i].age = tesseracts[i].age + 1;
      tesseracts[i].color = 'rgb(' + basicColor + ',' + basicColor + ',' + basicColor + ')';
      tesseracts[i].dim += tesseracts[i].dimStep;
      tesseracts[i].ox += tesseracts[i].xStep;
      tesseracts[i].oy += tesseracts[i].yStep;
      tesseracts[i].rotX += tesseracts[i].rotXStep;
      tesseracts[i].rotZ += tesseracts[i].rotZStep;
      tesseracts[i].draw();

      if (tesseracts[i].age > tesseracts[i].lifeLength || tesseracts[i].oy > canvas.height || tesseracts[i].oy + tesseracts[i].dim < 0) {
        tesseracts.splice(i, 1);
      }
    }

    window.requestAnimationFrame(animateTesseracts);
  }

  createTesseracts(40);
  animateTesseracts();
})();