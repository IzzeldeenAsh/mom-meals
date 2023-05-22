import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss'],
})
export class DeliveryInfoComponent implements OnInit {
  textInput: string =
    'Curabitur vel efficitur risus, id scelerisque neque. Donec ultrices tincidunt urna et egestas. Cras ipsum magna, mattis in justo a, rhoncus tempor erat.';
  ngOnInit(): void {}

  editMode = false;

  enableEditMode() {
    this.editMode = true;
  }

  disableEditMode() {
    this.editMode = false;
  }

  onSubmit() {
    this.editMode = false;
  }
}
