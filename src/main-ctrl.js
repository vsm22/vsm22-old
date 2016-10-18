(function(){

  var mainTitle = document.getElementById('main-title');
  var mainDescription = document.getElementById('main-description');

  var mainNav = document.getElementById('main-nav');
  var stickyNav = document.getElementById('sticky-nav');

  stickyNav.innerHTML += mainNav.innerHTML;
  stickyNav.style.top = mainNav.getBoundingClientRect().top;
  stickyNav.style.left = mainNav.getBoundingClientRect().left;


  document.addEventListener('scroll', scrollPage);

  function scrollPage () {
    document.removeEventListener('scroll', scrollPage);
    document.addEventListener('scroll', documentIsAtTop);

    mainTitle.style.visibility = 'hidden';
    mainDescription.style.visibility = 'hidden';
    mainNav.style.visibility = 'hidden';

    stickyNav.style.visibility = 'visible';
  }

  function documentIsAtTop () {

    if(window.scrollY === 0) {
      mainTitle.style.visibility = 'visible';
      mainDescription.style.visibility = 'visible';
      mainNav.style.visibility = 'visible';

      stickyNav.classList.remove('sticky-nav-visible');
      stickyNav.style.visibility = 'hidden';
      document.addEventListener('scroll', scrollPage);
    }

  }

}());
