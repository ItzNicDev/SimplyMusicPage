import {Component, OnInit} from '@angular/core';
import {pagelinkEnumList} from "../../enums/pagelink-enums";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public currentScrollPosition: number = 0;
public showScrollButton: boolean = true;
public showFooter: boolean = false;

public yPositionLatestReleaseFrameElement: number = 0;
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
  ngOnInit() {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      this.currentScrollPosition = scrollPosition
      // console.log(this.currentScrollPosition);
      if(this.currentScrollPosition >= 700) {
        this.showScrollButton = false;
      }
      if(this.currentScrollPosition <= 700) {
        this.showScrollButton = true;
        this.showFooter = true;
      }


      const latestReleaseFrameElement = document.getElementById("latest-release-frame");
      if (latestReleaseFrameElement) {
        this.yPositionLatestReleaseFrameElement = latestReleaseFrameElement.offsetTop;
        console.log(this.yPositionLatestReleaseFrameElement)
      }


    });
  }
}
