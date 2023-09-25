import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleEditComponent } from './people-list/people-edit/people-edit.component'
import { CustomBackgroundDirective } from './directives/custom-background.directive';
import { DropdwonDirective } from './directives/dropdown.directive';
import { ProjectsDefaultComponent } from './projects/projects-default/projects-default.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectListComponent,
    ProjectItemComponent,
    ProjectDetailComponent,
    PeopleListComponent,
    PeopleEditComponent,
    CustomBackgroundDirective,
    DropdwonDirective,
    ProjectsDefaultComponent,
    ProjectEditComponent,
    NotFoundComponent,
    AuthComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
