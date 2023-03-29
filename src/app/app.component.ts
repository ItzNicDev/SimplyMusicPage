import {Component, Directive} from '@angular/core';

import {NgbToast} from "ngb-toast";
import {ChildrenOutletContexts} from "@angular/router";
import {slideInAnimation} from "./animations";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})

export class AppComponent {
  title = 'app';

}
