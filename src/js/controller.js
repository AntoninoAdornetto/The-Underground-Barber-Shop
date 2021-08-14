import * as Model from "./model.js";
import app from "./view.js";

// Browser Support
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();
import "core-js/stable";
import "regenerator-runtime/runtime";

// Config Imports
import { SPEED } from "./config.js";
import { COORDINATES } from "./config.js";
import { DesktopArray } from "./config.js";
import { MobileArray } from "./config.js";

const init = function () {
  app.speed = SPEED;
  app.coords = COORDINATES;
  app.DesktopPhotos = DesktopArray;
  app.MobilePhotos = MobileArray;
  app.setTotalHairCuts(Model.totalHairCuts());
  app.renderEvent();
};

init();
