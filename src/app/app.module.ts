import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BooksComponent } from './component/books/books.component';
import {BooksService} from './service/books.service'
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { TopmenuComponent } from './component/shared/topmenu/topmenu.component';
import { LeftmenuComponent } from './component/shared/leftmenu/leftmenu.component';
import { AngularMaterialModule } from './angmaterial.module';
import { FriendsComponent } from './component/friends/friends.component';
import { PostsComponent } from './component/posts/posts.component';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { SettingsComponent } from './component/settings/settings.component';
import { UserprofilesComponent } from './component/userprofiles/userprofiles.component';
import {AppRoutingModule, routedComponent } from './app.routing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  
];

@NgModule({
  declarations: [
   
    AppComponent,
    BooksComponent,
    HeaderComponent,
    FooterComponent,
    TopmenuComponent,
    LeftmenuComponent,
    FriendsComponent,
    NotificationsComponent,
    UserprofilesComponent,
    SettingsComponent,
    PostsComponent,
    routedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    //NgbModule.forRoot(),
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
