"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DayDetailComponent = (function () {
    function DayDetailComponent(route) {
        var _this = this;
        this.route = route;
        this.detail = "";
        this.route.params.subscribe(function (params) { return _this.detail = params.detail; });
    }
    DayDetailComponent.prototype.ngOnInit = function () {
    };
    DayDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-day-detail',
            templateUrl: './day-detail.component.html',
            styleUrls: ['./day-detail.component.css']
        })
    ], DayDetailComponent);
    return DayDetailComponent;
}());
exports.DayDetailComponent = DayDetailComponent;
