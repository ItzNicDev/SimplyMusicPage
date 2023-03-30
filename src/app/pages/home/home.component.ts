import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  redirect(pagelink: string) {
    console.log(pagelink)
  }


  scrollDown(y: number) {
    window.scrollTo({
      top: y,
      behavior: "smooth"});

  }
}
