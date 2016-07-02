"use strict";
require("../core");
var core_1 = require("../core");
var error_list_component_1 = require("./error-list.component");
var error_config_provider_1 = require("./error-config.provider");
var error_list_action_creator_1 = require("./error-list.action-creator");
var reducers = require("./error-list.reducers");
var actions = require("./error-list.actions");
var app = angular.module("app.errorList", [
    "app.core"
]);
core_1.provide(app, error_list_action_creator_1.ErrorListActionCreator);
app.provider("ErrorConfig", error_config_provider_1.ErrorConfigProvider);
app.component(error_list_component_1.ErrorListComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
for (var action in actions) {
    core_1.provideAction(app, actions[action]);
}
//# sourceMappingURL=index.js.map