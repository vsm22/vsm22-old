'use strict';

$(function () {
  'use strict';

  var mainNav = document.getElementById('main-nav');
  var stickyNav = document.getElementById('sticky-nav');

  var projectsLink = document.getElementById('projects-link');
  var projectsLinkSticky = document.getElementById('projects-link-sticky');
  var resumeLink = document.getElementById('resume-link');
  var resumeLinkSticky = document.getElementById('resume-link-sticky');
  var contactLink = document.getElementById('contact-link');
  var contactLinkSticky = document.getElementById('contact-link-sticky');
  var topLinkSticky = document.getElementById('top-link-sticky');
  var topArrowBodySticky = document.getElementById('sticky-return-to-top');

  var mainHeaderEl = document.getElementById('main-header');
  var mainWrapEl = document.getElementById('main-content-wrap');
  var projectsEl = document.getElementById('projects');
  var additorProjectEl = document.getElementById('additor');
  var weathervaneProjectEl = document.getElementById('weathervane');
  var jsLiveWidgetsProjectEl = document.getElementById('js-live-widgets');
  var canvasAnimationsProjectEl = document.getElementById('canvas-animations');
  var ghostDancingProjectEl = document.getElementById('ghost-dancing');
  var dissertationProjectEl = document.getElementById('dissertation');
  var fastPastDanceProjectEl = document.getElementById('fast-past-dance');
  var jhfPhotoboothProjectEl = document.getElementById('jhf-photobooth');
  var resumeEl = document.getElementById('resume');
  var contactEl = document.getElementById('contact');

  $('#main-nav a, #sticky-nav a, #sticky-return-to-top a').on('click', function () {
    slideToElement($(this.hash));
  });
  $('.projects-flip-nav a').on('click', function () {
    slideToElement($(this.hash), -60);
  });

  function slideToElement(element, yOffset) {
    var yOffset = yOffset || 0;

    $('html, body').animate({
      scrollTop: $(element).offset().top + yOffset
    }, 1000);
  }

  window.addEventListener('scroll', scrollEvent);

  function scrollEvent(e) {
    window.requestAnimationFrame(toggleStickyNav);
  }

  function toggleStickyNav() {
    if (window.scrollY < 10) {
      stickyNav.style.transition = 'top 1s';
      stickyNav.style.top = '-100px';
    } else {
      stickyNav.style.transition = 'top 1s';
      stickyNav.style.top = '0px';

      if (window.scrollY > document.getElementById('projects').offsetTop) {
        stickyNav.style.height = '3em';
      }
    }
  }
}());