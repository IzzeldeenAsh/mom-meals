import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent {
  editForm!: FormGroup;
  editMode = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
        ],
      ],
      currentPassword: [''],
      newPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'
          ),
        ],
      ],
      confirmNewPassword: [''],
    });
  }

  enableEditMode() {
    this.editMode = true;
  }

  disableEditMode() {
    this.editMode = false;
  }

  togglePassword(field: string) {
    const fieldControl = this.editForm.get(field) as any;
    fieldControl.type = fieldControl.type === 'password' ? 'text' : 'password';
  }

  saveChanges() {
    // Handle form submission and saving changes
    if (this.editForm.valid) {
      // Perform the save operation
      console.log('Form submitted successfully!');
      this.disableEditMode();
    } else {
      // Form has validation errors
      console.log('Please fill in the required fields.');
    }
  }
}
