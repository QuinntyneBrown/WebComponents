﻿/// <reference path="../node_modules/rx/ts/rx.all.d.ts" />

require("./components/core");

require("./components/backdrop");
require("./components/blog");
require("./components/counter");
require("./components/flip-card");
require("./components/modal");
require("./components/nav-menu");
require("./components/rotator");
require("./components/window");

var app = angular
    .module("components", [
        "app.blog",
        "app.core",
        "app.counter",
        "app.flipCard",
        "app.modal",
        "app.navMenu",
        "app.rotator",   
        "app.window"                        
    ]);

app.config([() => {
    FastClick.attach(document.body);
}]);


