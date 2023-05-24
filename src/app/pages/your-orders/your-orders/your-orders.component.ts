import { Component } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';

@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.component.html',
  styleUrls: ['./your-orders.component.scss'],
})
export class YourOrdersComponent {
  constructor(private readonly joyrideService: JoyrideService) {}

  ngOnInit() {
    this.joyrideService.startTour({ steps: ['step1', 'step2', 'step3'] });
  }
  skipTour() {
    this.joyrideService.closeTour();
  }

  startTour() {
    this.joyrideService.startTour({ steps: ['step1', 'step2', 'step3'] });
  }
}
