import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {filter} from 'rxjs/operators'
import {Router, Routes} from "@angular/router";


import {NavigationStart} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {


  // public homeButton: boolean = false;
  // public tracksButton: boolean = false;
  // public contactButton: boolean = false;
  // public aboutMeButton: boolean = false;

  public currentRoute: string = "";

  public newList: object = {}

  public cookietest: string = "";

  public test: boolean = false;

  public publicList: Object = {};

  public activeButtons = {
    home: true,
    tracks: false,
    contact: false,
    aboutMe: false
  }

  public activeButtonsCookie = {
    home: false,
    tracks: false,
    contact: false,
    aboutMe: false

  }


  @Input() object: Object = {}


  // private subscription: Subscription;

  constructor(private routes: Router) {
    this.homebutton = new ElementRef(null);
    this.tracksButton = new ElementRef(null);
    this.contactButton = new ElementRef(null);
    this.aboutMeButton = new ElementRef(null);
  }

  @ViewChild('homeButton', {static: true}) homebutton: ElementRef;
  @ViewChild('tracksButton', {static: true}) tracksButton: ElementRef;
  @ViewChild('contactButton', {static: true}) contactButton: ElementRef;
  @ViewChild('aboutMe', {static: true}) aboutMeButton: ElementRef;


  hideNavbar = false;
  scrollPosition = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.scrollPosition = window.pageYOffset;
    if (this.scrollPosition > 800) {
      this.hideNavbar = true;
    } else {
      this.hideNavbar = false;
    }
  }


  checkIfActive(id: string) {

    this.activeButtons = {home: false, tracks: false, contact: false, aboutMe: false,};

    if (id == "home") {
      this.activeButtons = {home: true, tracks: false, contact: false, aboutMe: false,};
      this.routes.navigate(['/home'])

    }
    if (id == "tracks") {
      this.activeButtons = {home: false, tracks: true, contact: false, aboutMe: false,};
      this.routes.navigate(['/tracks'])

    }
    if (id == "contact") {
      this.activeButtons = {home: false, tracks: false, contact: true, aboutMe: false,};
      this.routes.navigate(['/contact'])

    }
    if (id == "aboutMe") {
      this.activeButtons = {home: false, tracks: false, contact: false, aboutMe: true};
      this.routes.navigate(['/aboutMe'])

    }
    this.generateLocalStorageKey();
  }

  debug(value: any) {
    console.log(this.activeButtons)
    // localStorage.setItem("Nele", "i love you my darling")
    // document.cookie ="Nele";


  }

  generateLocalStorageKey() {
    localStorage.setItem("activeButton", JSON.stringify(this.activeButtons))
    this.activeButtons = JSON.parse(localStorage.getItem('activeButton') ?? '');

    if (this.activeButtons.home) {
      localStorage.setItem("currentRoute", "/home")
    }

    if (this.activeButtons.tracks) {
      localStorage.setItem("currentRoute", "/tracks")
    }

    if (this.activeButtons.contact) {
      localStorage.setItem("currentRoute", "/contact")
    }

    if (this.activeButtons.aboutMe) {
      localStorage.setItem("currentRoute", "/aboutMe")
    }
  }


  ngOnInit() {
    this.activeButtons = JSON.parse(localStorage.getItem('activeButton') ?? '');

    let currentRoute: any = localStorage.getItem("currentRoute");
    this.routes.navigate(currentRoute)
  }


}
