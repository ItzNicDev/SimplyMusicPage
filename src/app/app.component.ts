import {Component, Directive} from '@angular/core';

import {NgbToast} from "ngb-toast";
import {ChildrenOutletContexts, RouterOutlet} from "@angular/router";

import {fader} from '../app/animations'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader
  ]
})

export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
