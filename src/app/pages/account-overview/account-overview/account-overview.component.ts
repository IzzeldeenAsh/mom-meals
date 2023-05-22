import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss'],
})
export class AccountOverviewComponent {
  activeRoute!: string;
  active2Route: any;
  url!: string;
  url1: any;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url.split('/');
        this.url = url[2];
        this.url1 = url[2];
        this.activeRoute = this.url;
        this.active2Route = this.url1;
        console.log('url', this.url);
      }
    });
  }
  setActive() {
    this.activeRoute = this.url;
    this.active2Route = this.url1;
  }
}
