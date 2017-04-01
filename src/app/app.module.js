"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var about_me_component_1 = require('./about-me/about-me.component');
var my_portfolio_component_1 = require('./my-portfolio/my-portfolio.component');
var contact_me_component_1 = require('./contact-me/contact-me.component');
var todo_list_component_1 = require('./todo-list/todo-list.component');
var my_contacts_component_1 = require('./my-contacts/my-contacts.component');
var my_calendar_component_1 = require('./my-calendar/my-calendar.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                about_me_component_1.AboutMeComponent,
                my_portfolio_component_1.MyPortfolioComponent,
                contact_me_component_1.ContactMeComponent,
                todo_list_component_1.TodoListComponent,
                my_contacts_component_1.MyContactsComponent,
                my_calendar_component_1.MyCalendarComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'about', component: about_me_component_1.AboutMeComponent },
                    { path: 'portfolio', component: my_portfolio_component_1.MyPortfolioComponent },
                    { path: 'contact', component: contact_me_component_1.ContactMeComponent },
                    { path: 'todo', component: todo_list_component_1.TodoListComponent },
                    { path: 'addressbook', component: my_contacts_component_1.MyContactsComponent },
                    { path: 'calendar', component: my_calendar_component_1.MyCalendarComponent }
                ])
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
