import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'latest-releases',
  templateUrl: './latest-releases.component.html',
  styleUrls: ['./latest-releases.component.css']
})
export class LatestReleasesComponent implements OnInit {

  public yPositionLatestReleaseFrameElement: number = 0;

  ngOnInit() {
    console.log("loading...")
    var element = document.querySelector('.latest-release-c');
    if (window.CSS && CSS.supports('backdrop-filter', 'blur(10px)')) {
      element?.classList.add('blur-background');
    }

    // const latestReleaseFrameElement = document.getElementById("latest-release-frame");
    // if (latestReleaseFrameElement) {
    //   this.yPositionLatestReleaseFrameElement = latestReleaseFrameElement.offsetTop;
    //   console.log(this.yPositionLatestReleaseFrameElement)
    // }


  }
}
