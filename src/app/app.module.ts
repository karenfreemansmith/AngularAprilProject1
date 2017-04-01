import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MyPortfolioComponent,
    ContactMeComponent,
    TodoListComponent,
    MyContactsComponent,
    MyCalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutMeComponent },
      { path: 'portfolio', component: MyPortfolioComponent },
      { path: 'contact', component: ContactMeComponent },
      { path: 'todo', component: TodoListComponent },
      { path: 'addressbook', component: MyContactsComponent },
      { path: 'calendar', component: MyCalendarComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
