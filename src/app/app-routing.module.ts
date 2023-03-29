import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {TracksComponent} from "./pages/tracks/tracks.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'home', component: HomeComponent, data: {animation: 'home'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'contact'}},
  {path: 'tracks', component: TracksComponent},
  {path: 'aboutMe', component: AboutMeComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
