import {Directive, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LatestReleasesComponent } from './components/latest-releases/latest-releases.component';
import { NewestReleaseComponent } from './components/latest-releases/newest-release/newest-release.component';
import { OlderReleasesComponent } from './components/latest-releases/older-releases/older-releases.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonGroupComponent,
    HomeComponent,
    ContactComponent,
    TracksComponent,
    AboutMeComponent,
    LatestReleasesComponent,
    NewestReleaseComponent,
    OlderReleasesComponent,
    FooterComponent,
  ],
  imports: [
    // RouterModule.forRoot(rout),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {






}
