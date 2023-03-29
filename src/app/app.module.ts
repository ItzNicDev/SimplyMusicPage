import {Directive, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonGroupComponent,
    HomeComponent,
    ContactComponent,
    TracksComponent,
    AboutMeComponent,
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
