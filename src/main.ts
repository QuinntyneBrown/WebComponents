﻿require("./assets/scss");
require("./components");

var app = angular
    .module("components", [
        "app.ads",
        "app.backdrop",
        "app.button",
        "app.carouselActionPanel",
        "app.core",
        "app.counter",
        "app.errorList",
        "app.flipCard",
        "app.flyout",
        "app.hamburgerButton",
        "app.hero",
        "app.login",
        "app.modal",
        "app.navMenu",
        "app.pagedList",
        "app.panel",
        "app.popover",
        "app.picture",
        "app.river",
        "app.rotator",   
        "app.socialShare",
        "app.spinner",
        "app.tabs",
        "app.user",
        "app.window"                     
    ]);

app.config([() => {
    FastClick.attach(document.body);
}]);


import * as _core from "./components/core";
import * as _modal from "./components/modal";

export const core = _core;
export const modal = _modal;