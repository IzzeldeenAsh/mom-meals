import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-meals-nav',
  templateUrl: './meals-nav.component.html',
  styleUrls: ['./meals-nav.component.scss'],
})
export class MealsNavComponent {
  @Input() header__white: string | undefined;

  headerSticky: boolean = false;
  showCart: boolean = false;
  showSidebar: boolean = false;
  showHomeDropdown: boolean = false;
  showmealsDropdown: boolean = false;
  showBlogDropdown: boolean = false;
  showPagesDropdown: boolean = false;

  // cart quantity
  count = 1;
  countTwo = 1;
  countThree = 1;

  // sticky nav
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.headerSticky = true;
    } else {
      this.headerSticky = false;
    }
  }
  // handleCartToggle
  handleCartToggle() {
    this.showCart = true;
  }
  handleCartClose() {
    this.showCart = false;
  }
  handleAddCart(number: string) {
    if (number === 'one') {
      this.count++;
    }
    if (number === 'two') {
      this.countTwo++;
    }
    if (number === 'three') {
      this.countThree++;
    }
  }
  handleDecreaseCart(number: string) {
    if (number === 'one' && this.count > 1) {
      this.count--;
    }
    if (number === 'two' && this.countTwo > 1) {
      this.countTwo--;
    }
    if (number === 'one' && this.countThree > 1) {
      this.countThree--;
    }
  }
  // handleSidebar
  handleSidebar() {
    this.showSidebar = true;
  }
  handleSidebarClose() {
    this.showSidebar = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
