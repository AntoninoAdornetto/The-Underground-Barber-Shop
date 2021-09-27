import { LOGOARRAY } from '../config.js';

export default class View {
  _parentElement = document.querySelector('nav');
  _containers = document.querySelectorAll('.container');
  _speed;
  _viewPort = window.innerWidth;

  _data(num, speed) {
    document.querySelector('.total--cuts').dataset.cuts = num;
    this._speed = speed;
  }

  _handlePageEvent(selector, ev, handle) {
    if (selector === window) return window.addEventListener(ev, handle);
    document.querySelector(selector).addEventListener(ev, function (e) {
      e.preventDefault();
      handle();
    });
  }

  _renderPageEvents() {
    this._handlePageEvent('.fa-bars', 'click', this._renderMobileDropdown);
    this._handlePageEvent('.icon8--btn', 'click', this._icon8Links);
    this._handlePageEvent(window, 'scroll', this._navBGColor);
    this._appearOnScroll(
      ['.heading__div--text', '.under--text', '.under--img', '.clippers--img'],
      ['heading--animation', 'span--animation', 'icon--transition']
    );
    this._executeOnScroll(this._hairCutCounter.bind(this));
    this._handleSmoothScroll();
  }

  _renderMobileDropdown() {
    document.querySelector('.mobile--dropdown').firstElementChild.classList.toggle('mobile--ul');
  }

  _navBGColor() {
    const navBar = document.querySelector('nav');
    const heroY_Axis = document.querySelector('.hero--container');
    const hamburger = document.querySelector('.fa-bars');
    const navLinks = document.querySelectorAll('.nav--link');
    const navLogo = document.querySelectorAll('.nav--logo');

    if (heroY_Axis.getBoundingClientRect().y > -929)
      return (
        navBar.classList.remove('white__bg--transparant'),
        hamburger.classList.remove('black'),
        [...navLogo].map((nav) => (nav.src = LOGOARRAY[1])),
        [...navLinks].map((link) => link.classList.remove('black'))
      );

    return (
      navBar.classList.add('white__bg--transparant'),
      hamburger.classList.add('black'),
      [...navLogo].map((nav) => (nav.src = LOGOARRAY[0])),
      [...navLinks].map((link) => link.classList.add('black'))
    );
  }

  _icon8Links() {
    document.querySelector('.icon--links').classList.toggle('invisible');
  }

  _appearOnScroll(nodeList, animationClass) {
    /**
     * @param - {Array} - nodeList -  All the element classes we want to observe
     * @param - {Array} - animationClass - AnimationClasses that we will add to the elements in nodelist
     * @description - nodeList is mapped after being used for "searchClasses" to remove "."
     * @constant - {Array} - searchClasses - Convert nodeList into an actual "nodelist" of DOM elements.
     * @function - appear - new Observer that is watching for our nodeList of classes in the VP.
     */
    const searchClasses = document.querySelectorAll(nodeList);
    nodeList = nodeList.map((elm) => elm.slice(1));

    const appear = new IntersectionObserver(function (entry, appear) {
      entry.forEach((entry, index) => {
        if (!entry.isIntersecting) return;
        if (entry.isIntersecting && entry.target.classList.contains(nodeList[0])) {
          entry.target.classList.add(animationClass[0]);
          appear.unobserve(entry.target);
        }
        if (entry.isIntersecting && entry.target.classList.contains(nodeList[1])) {
          entry.target.classList.add(animationClass[1]);
          appear.unobserve(entry.target);
        }
        if (entry.isIntersecting && entry.target.classList.contains(nodeList[2])) {
          entry.target.classList.add(animationClass[2]);
          appear.unobserve(entry.target);
        }
        if (entry.isIntersecting && entry.target.classList.contains(nodeList[3])) {
          entry.target.classList.add(animationClass[2]);
          appear.unobserve(entry.target);
        }
      });
    });

    searchClasses.forEach((animation) => {
      appear.observe(animation);
    });
  }

  _hairCutCounter() {
    const counter = document.querySelector('.total--cuts');
    const animate = () => {
      const value = +counter.dataset.cuts;
      const data = +counter.innerText;
      const time = value / this._speed;

      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      } else {
        counter.innerText = value;
      }
    };
    animate();
  }

  _executeOnScroll(handler) {
    const domElement = document.getElementById('divider--2');

    const appear = new IntersectionObserver(function (entry, appear) {
      entry.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.isIntersecting) return handler();
      });
    });

    appear.observe(domElement);
  }

  _setDeskTopImages(imageArray) {
    const slideImages = document.querySelectorAll('.slide > img');
    Array.from(slideImages).map((img, index) => (img.src = imageArray[index]));
  }

  _setMobileImages(imageArray) {
    const slideImages = document.querySelectorAll('.slide > img');
    Array.from(slideImages).map((img, index) => (img.src = imageArray[index]));
  }

  _initImages(desktopArray) {
    if (this._viewPort < 889) return;
    this._setDeskTopImages(desktopArray);
  }

  _handleVPImages(desktopArray, MobileArray) {
    const VP = window.innerWidth;
    if (VP < 889) return this._setMobileImages(MobileArray);
    if (VP > 890) return this._setDeskTopImages(desktopArray);
  }

  _handleSmoothScroll() {
    /**
     * @constant links - Array of all Anchor Tags
     * @description - Smooth scroll Poly fill for mobile.
     */
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.target != undefined)
          return document.getElementById(e.target.getAttribute('href').slice(1)).scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
}
