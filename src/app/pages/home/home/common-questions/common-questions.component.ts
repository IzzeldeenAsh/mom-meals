import { Component } from '@angular/core';

@Component({
  selector: 'app-common-questions',
  templateUrl: './common-questions.component.html',
  styleUrls: ['./common-questions.component.scss'],
})
export class CommonQuestionsComponent {
  toggleIcon(event: MouseEvent) {
    const iconElement = event.currentTarget as HTMLElement;
    iconElement.classList.toggle('fa-plus');
    iconElement.classList.toggle('fa-minus');
  }
}
