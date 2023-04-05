import {Component} from '@angular/core';
import {pagelinkEnumList} from "../../enums/pagelink-enums";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
  }


  scrollDown(y: number) {
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });

  }
}
