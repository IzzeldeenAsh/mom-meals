import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss'],
})
export class HeaderOneComponent implements OnInit {
  headerSticky: boolean = false;
  showSidebar: boolean = false;
  showmealsDropdown: boolean = false;

  // sticky nav
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.headerSticky = true;
    } else {
      this.headerSticky = false;
    }
  }

  // handleSidebar
  handleSidebar() {
    this.showSidebar = true;
  }
  handleSidebarClose() {
    this.showSidebar = false;
  }

  // mealsDropdown
  mealsDropdown() {
    this.showmealsDropdown = !this.showmealsDropdown;
  }

  constructor() {}

  ngOnInit(): void {}
}
