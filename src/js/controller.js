import * as Model from './model.js';
import View from './views/appview.js';
import MapView from './views/mapview.js';
import SlideView from './views/slideview.js';

// Browser Support
import smoothscroll from 'smoothscroll-polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Config Imports
import { SPEED } from './config.js';
import { COORDINATES } from './config.js';
import { DesktopArray } from './config.js';
import { MobileArray } from './config.js';

const siteController = function () {
  try {
    MapView._data(Model.totalHairCuts(), SPEED);
    MapView._initImages(DesktopArray);
    MapView._handleVPImages(DesktopArray, MobileArray);
    MapView._renderPageEvents();
    MapView._loadLocationMap(COORDINATES);
    SlideView._slider('.slide', '.dots');
  } catch (err) {
    alert(err);
  }
};

const init = function () {
  smoothscroll.polyfill();
  MapView._handleEventRender(siteController);
};

init();
