'use strict';

(function () {
  const navbarContainer = document.querySelector(
    '.page-section-container:has(.navbar)'
  );
  const heroContainer = document.querySelector(
    '.page-section-container:has(.hero)'
  );
  const navbar = document.querySelector('.navbar');
  const navButtons = document.querySelectorAll('.navbar .nav-buttons .anchor');
  const openButton = navbar.querySelector('.menu-buttons .--open-menu .button');
  const closeButton = navbar.querySelector(
    '.menu-buttons .--close-menu .button'
  );
  const learnMoreButton = document.querySelector(
    '.hero .buttons .button.--de-emphasized'
  );
  const year = document.querySelector(
    '.page-footer .--logo-socials-copyright .text .year'
  );

  /* Refresh Date */
  year.textContent = new Date().getFullYear();

  /* Mobile Navigation */
  const expandNav = function () {
    navbar.classList.add('--menu-expanded');
  };
  const collapseNav = function () {
    navbar.classList.remove('--menu-expanded');
  };

  openButton.addEventListener('click', (e) => {
    e.preventDefault();
    expandNav();
  });
  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    collapseNav();
  });
  navButtons.forEach((navButton) => {
    navButton.addEventListener('click', collapseNav);
  });

  /* Add scroll to learn more button */
  learnMoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    document
      .querySelector('.how-it-works')
      .scrollIntoView({ behavior: 'smooth' });
  });

  /* Sticky Navigation */
  const makeNavigationSticky = function () {
    navbarContainer.classList.add('--sticky');
  };
  const notMakeNavigationSticky = function () {
    navbarContainer.classList.remove('--sticky');
  };

  const windowObserverHandler = function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) makeNavigationSticky();
      else notMakeNavigationSticky();
    });
  };

  const windowObserver = new IntersectionObserver(windowObserverHandler, {
    root: null,
    threshold: 0,
  });

  windowObserver.observe(heroContainer);

  /* Stick Navigation Scroll Offset Fix */
  const scrollHandler = function (e) {
    e.preventDefault();

    const id = e.target.getAttribute('href');
    const scrollTarget = document.querySelector(id);
    const distanceToTarget = scrollTarget.getBoundingClientRect().top;
    const navbarHeight = navbarContainer.getBoundingClientRect().height;

    location.hash = id;
    window.scrollBy({
      top: distanceToTarget - navbarHeight,
      behavior: 'smooth',
    });
  };

  navButtons.forEach((navButton) => {
    navButton.addEventListener('click', scrollHandler);
  });
})();
