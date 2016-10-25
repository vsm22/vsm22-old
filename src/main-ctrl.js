(function(){
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

  /* Clicking link sliding ---------------------------------------------------*/
  projectsLink.addEventListener('mouseup', slideToProjects);
  projectsLinkSticky.addEventListener('mouseup', slideToProjects);
  resumeLink.addEventListener('mouseup', slideToResume);
  resumeLinkSticky.addEventListener('mouseup', slideToResume);
  contactLink.addEventListener('mouseup', slideToContact);
  contactLinkSticky.addEventListener('mouseup', slideToContact);
  topLinkSticky.addEventListener('mouseup', slideToTop);
  topArrowBodySticky.addEventListener('mouseup', slideToTop);

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

  function slideToTop () {
    slideToElement( mainHeaderEl );
  }
  function slideToProjects () {
    slideToElement( projectsEl );
  }
  function slideToResume () {
    slideToElement( resumeEl );
  }
  function slideToContact () {
    slideToElement( contactEl );
  }

  function slideToElement ( element ) {
    var targetY = element.getBoundingClientRect().top + window.scrollY;

    smoothSlide();

    function smoothSlide() {
      // scroll by amount 1/10th of the distance between current scroll and destination, or 1px
      var scrollDelta = (targetY - window.scrollY)/10;
      var scrollToY = window.scrollY + scrollDelta;
      window.scrollTo(0, scrollToY);

      // check if reached target element, or reached bottom of the page, or reached top of the page
      // if not reached, call the sliding function again on next animation frame
      if (Math.abs(window.scrollY - targetY) > 10
          && ((window.scrollY + window.innerHeight) < (document.body.clientHeight - 10))
          && (window.scrollY > 1)) {
          window.requestAnimationFrame(smoothSlide); // keep scrolling
      }
    }
  }

  window.addEventListener('scroll', scrollEvent);

  function scrollEvent (e) {
    // 2. show the sticky navigation bar
    window.requestAnimationFrame(toggleStickyNav);
  }

  function toggleStickyNav () {
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
