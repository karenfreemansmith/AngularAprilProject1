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
var project_component_1 = require('./project/project.component');
var project_detail_component_1 = require('./project-detail/project-detail.component');
var task_component_1 = require('./task/task.component');
var contact_component_1 = require('./contact/contact.component');
var contact_detail_component_1 = require('./contact-detail/contact-detail.component');
var month_component_1 = require('./month/month.component');
var week_component_1 = require('./week/week.component');
var day_component_1 = require('./day/day.component');
var day_detail_component_1 = require('./day-detail/day-detail.component');
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
                my_calendar_component_1.MyCalendarComponent,
                project_component_1.ProjectComponent,
                project_detail_component_1.ProjectDetailComponent,
                task_component_1.TaskComponent,
                contact_component_1.ContactComponent,
                contact_detail_component_1.ContactDetailComponent,
                month_component_1.MonthComponent,
                week_component_1.WeekComponent,
                day_component_1.DayComponent,
                day_detail_component_1.DayDetailComponent
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
                    { path: 'day-detail', component: day_detail_component_1.DayDetailComponent },
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
