"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("../core");
var SocialShareComponent = (function () {
    function SocialShareComponent() {
    }
    SocialShareComponent = __decorate([
        core_1.Component({
            template: require("./social-share.component.html"),
            styles: [require("./social-share.component.scss")],
            selector: "social-share",
            inputs: ["socialShareItems"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], SocialShareComponent);
    return SocialShareComponent;
}());
exports.SocialShareComponent = SocialShareComponent;
//# sourceMappingURL=social-share.component.js.map