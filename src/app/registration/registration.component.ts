import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DemoPayment } from 'src/services/demoPayment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  user: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private demoPayment: DemoPayment,
    private router: Router
  ) {
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
    console.log(this.registrationForm.value.accountHolder);
    let iban = this.registrationForm.value.iban;
    let accountholder = this.registrationForm.value.accountHolder;

    this.user = Object.assign(this.user, this.registrationForm.value);
    this.addUser(this.user);

    this.demoPayment.paymentData(iban, accountholder).subscribe((data) => {
      console.log(data);
    });
  }
  addUser(user: {}) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users') as string);
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

  goToHomePage() {
    this.router.navigateByUrl('/');
  }
}
