import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      number: new FormControl(),
      street: new FormControl(),
      houseNumber: new FormControl(),
      zipCode: new FormControl(),
      city: new FormControl(),
      accountHolder: new FormControl(),
      iban: new FormControl(),
    });
  }

  ngOnInit(): void {}
  captureForm() {
    console.log(this.registrationForm.value.iban);
  }
}
