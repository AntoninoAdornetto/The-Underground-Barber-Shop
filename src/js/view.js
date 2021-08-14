class App {
  speed;
  coords;
  map;
  DesktopPhotos;
  MobilePhotos;

  // Window Elements
  ViewPort = window.innerWidth;

  // Main Elements
  ancors = document.querySelectorAll("a");
  toggle = document.querySelectorAll(".toggle--btn");
  navigationLinks = document.querySelector(".navigation__links--div");
  navigationHeader = document.querySelector(".navigation__title--div");
  showcaseContainer = document.querySelector(".showcase--container");
  cardSection = document.getElementById("card__section");
  leafletMap = document.getElementById("mapid");

  // Card Elements
  cardDivs = document.querySelectorAll(".card--div");
  cardContainer = document.getElementById("card--container");
  counter = document.querySelector(".cut__counter");
  counterText = document.querySelector(".cut__counter--p");

  // Slider Elements
  slides = document.querySelectorAll(".slide");
  btnLeft = document.querySelector(".slider__btn--left");
  btnRight = document.querySelector(".slider__btn--right");
  dotContainer = document.querySelector(".dots");
  slide_Images = document.querySelectorAll(".slide > img");
  slideContainer = document.querySelector(".gallery__photo--container");

  renderEvent() {
    this.hamburgerBtn(this.toggleBtn.bind(this));
    this.slider(this.slides, this.dotContainer);
    this.renderScrollViewPortEvent();
    this._loadLocationMap(this.coords);
    this.initImages();
    this.resizeEventListener();
    this.smoothScroll(this.ancors);
  }

  hamburgerBtn(handler) {
    Array.from(this.toggle).map((span) => {
      span.addEventListener("click", handler);
    });
  }

  toggleBtn() {
    this.navigationLinks.classList.toggle("active");
    this.navigationHeader.classList.toggle("nav__title--click");
    this.showcaseContainer.classList.toggle("div--slide");
  }

  smoothScroll(arr) {
    Array.from(arr).map((anchorTag) => {
      const href = anchorTag.getAttribute("href");
      anchorTag.addEventListener("click", function (e) {
        anchorTag.classList.value === "navigation__btn--animation2" ||
        anchorTag.classList.value === "icon"
          ? null
          : document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  _loadLocationMap(position) {
    this.map = L.map(this.leafletMap).setView(position, 25);
    L.tileLayer(
      "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Gx5jvuqw8EakI6gDFZ6G",
      {
        attribution:
          '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoibWlkbmlnaHR4Y3J1aXNlIiwiYSI6ImNrczJzNzBnMzA2bWsycHJ6emFncHhwYjcifQ.wv9KHbdv5gEZDT664K7T1A",
      }
    ).addTo(this.map);
    const marker = L.marker(position).addTo(this.map);
    marker.bindPopup(
      `
                <p class="leaflet__text">The Underground Barber Shop</p>
                <p class="leaflet__text">150 N 8th ST STE 111</p>
                <p class="leaflet__text">Boise, ID 83702</p>
                <a class="leaflet__anchor" href="https://www.google.com/search?q=the+underground+barber+shop+boise+idaho" target="_blank">Directions</a>
            `
    );
  }

  setTotalHairCuts(num) {
    return (this.counter.dataset.cuts = num);
  }

  hairCutCounter() {
    const animate = () => {
      const value = +this.counter.dataset.cuts;
      const data = +this.counter.innerText;
      const time = value / this.speed;

      if (data < value) {
        this.counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      } else {
        this.counter.innerText = value;
      }
    };
    animate();
  }

  renderScrollViewPortEvent() {
    window.addEventListener("scroll", this.viewPortEvent.bind(this));
    window.addEventListener("touchstart", this.viewPortEvent.bind(this));
  }

  viewPortEvent() {
    const cardSection = document
      .getElementById("card__section")
      .getBoundingClientRect().top;
    if (cardSection > 550) return;
    return this.hairCutCounter();
  }

  slider(slidesElement, containerElm) {
    let curSlide = 0;
    const maxSlide = this.slides.length;

    const createDots = function () {
      slidesElement.forEach(function (_, i) {
        containerElm.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };

    const activateDot = function (slide) {
      document
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));

      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
    };

    const goToSlide = function (slide) {
      slidesElement.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };

    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }

      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const init = function () {
      goToSlide(0);
      createDots();

      activateDot(0);
    };

    init();

    this.btnRight.addEventListener("click", nextSlide.bind(this));
    this.btnLeft.addEventListener("click", prevSlide.bind(this));
  }

  setDesktopImages() {
    Array.from(this.slide_Images).map((img, index) => {
      return (img.src = this.DesktopPhotos[index]);
    });
  }

  setMobileImages() {
    Array.from(this.slide_Images).map((img, index) => {
      return (img.src = this.MobilePhotos[index]);
    });
  }

  initImages() {
    if (this.ViewPort < 889) return;
    this.setDesktopImages();
  }

  resizeEventHandler() {
    const VP = window.innerWidth;
    if (VP < 889) {
      return this.setMobileImages();
    } else {
      this.setDesktopImages();
    }
  }

  resizeEventListener() {
    window.addEventListener("resize", this.resizeEventHandler.bind(this));
  }
}

export default new App();
