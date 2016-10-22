(function(){

  var mainTitle = document.getElementById('main-title');
  var mainDescription = document.getElementById('main-description');

  var mainNav = document.getElementById('main-nav');
  var stickyNav = document.getElementById('sticky-nav');

  var projectsLink = document.getElementById('projects-link');
  var projectsLinkSticky = document.getElementById('projects-link-sticky');
  var resumeLink = document.getElementById('resume-link');
  var resumeLinkSticky = document.getElementById('resume-link-sticky');
  var contactLink = document.getElementById('contact-link');
  var contactLinkSticky = document.getElementById('contact-link-sticky');
  var topLinkSticky = document.getElementById('top-link-sticky');

  /* Clicking link sliding ---------------------------------------------------*/
  projectsLink.addEventListener('mouseup', slideToProjects);
  projectsLinkSticky.addEventListener('mouseup', slideToProjects);
  resumeLink.addEventListener('mouseup', slideToResume);
  resumeLinkSticky.addEventListener('mouseup', slideToResume);
  contactLink.addEventListener('mouseup', slideToContact);
  contactLinkSticky.addEventListener('mouseup', slideToContact);
  topLinkSticky.addEventListener('mouseup', slideToTop);

  function slideToProjects () {
    slideToElement(document.getElementById('projects'));
  }
  function slideToResume () {
    slideToElement(document.getElementById('resume'));
  }
  function slideToContact () {
    slideToElement(document.getElementById('contact'));
  }
  function slideToTop () {
    slideToElement(document.body);
  }

  function slideToElement (element) {
    toY = element.getBoundingClientRect().top + window.scrollY - stickyNav.clientHeight;

    smoothSlide();

    function smoothSlide() {
      window.scrollTo(0, (Math.trunc(
                            window.scrollY +
                              ((toY - window.scrollY)/10))
                         )
                     );
      if (Math.abs(window.scrollY - toY) > 10
          && (window.scrollY + window.innerHeight < document.body.clientHeight - 10)
          && (window.scrollY > 5)) {
            window.requestAnimationFrame(smoothSlide);
      }
    }
  }
  /* End clicking link sliding -----------------------------------------------*/


  /* Sticky menu slideout ----------------------------------------------------*/

  window.addEventListener('scroll', toggleStickyNav);

  function toggleStickyNav(e) {
    window.requestAnimationFrame(toggleStickyNavThrottle);


    function toggleStickyNavThrottle () {
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
  }



}());
