import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormControl, NgControl, Validators } from '@angular/forms';
import {
  MatDatepicker,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss'],
})
export class DeliveryInfoComponent implements OnInit {
  dates: Date[] = [new Date(), new Date(), new Date(), new Date()];

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

  changeDate(event: MatDatepickerInputEvent<Date>, index: number) {
    const date = event?.value ?? new Date();
    this.dates[index] = date;
  }
}
