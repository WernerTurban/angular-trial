import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserDetailsComponent} from './components/users/components/user-details/user-details.component';
import {UserListComponent} from './components/users/components/user-list/user-list.component';
import {HttpClientModule} from "@angular/common/http";
import {UserItemComponent} from './components/users/components/user-list/user-item/user-item.component';
import {UserSearchComponent} from './components/users/components/user-search/user-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserFormComponent} from './components/users/components/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    UserListComponent,
    UserItemComponent,
    UserSearchComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
