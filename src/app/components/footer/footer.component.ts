import { Component } from '@angular/core';
import {pagelinkEnumList} from "../../enums/pagelink-enums";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private routes: Router) {
  }

  redirect(pagelink: string) {
    console.clear()
    console.log("redirecting to: " + pagelink)
    if (pagelink == "youtube") {
      window.open(pagelinkEnumList.YouTube)
    }

    if(pagelink == "instagram") {
      window.open(pagelinkEnumList.Instagram);
    }

    if(pagelink == "spotify") {
      window.open(pagelinkEnumList.Spotify);
    }

    if(pagelink == "applemusic") {
      window.open(pagelinkEnumList.AppleMusic);

    }

    if(pagelink == "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });    }
  }

}
