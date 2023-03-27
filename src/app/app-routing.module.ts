import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {TracksComponent} from "./pages/tracks/tracks.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tracks', component: TracksComponent},
  {path: 'aboutMe', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
