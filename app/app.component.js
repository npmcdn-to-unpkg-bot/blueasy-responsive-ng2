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
var core_1 = require('@angular/core');
var home_component_1 = require('app/components/home.component');
var services_component_1 = require('app/components/services.component');
var portfolio_component_1 = require('app/components/portfolio.component');
var AppComponent = (function () {
    function AppComponent() {
        console.log(':::AppComponent:::');
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            templateUrl: 'app/components/partials/_nav.html',
            directives: [home_component_1.HomeComponent, services_component_1.ServicesComponent, portfolio_component_1.PortfolioComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map