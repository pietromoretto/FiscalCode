import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculateFiscalCodeService } from './calculate-fiscal-code.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fiscalCodeForm: FormGroup;
  fiscalCode: string;
  submitted: boolean = false;
  success: boolean = false;
  errorMessage: string = "";
  title: string = 'FISCAL CODE CALCULATOR';
  fields = {
    surname: ['', Validators.required],
    name: ['', Validators.required],
    date: ['', Validators.required],
    sex: ['', Validators.required],
    birthPlace: ['', Validators.required]
  };

  constructor(private formBuilder: FormBuilder, private fiscalCodeCalculator: CalculateFiscalCodeService) { }

  ngOnInit() {
    this.fiscalCodeForm = this.formBuilder.group(this.fields);
  }

  onSubmit() {
    this.submitted = true;

    if (this.fiscalCodeForm.invalid) {
      console.log("INVALID");
      return;
    }

    if (this.fiscalCodeCalculator.validCity(this.fiscalCodeForm.controls.birthPlace.value)) {
      this.fiscalCode = this.fiscalCodeCalculator.calculate(this.fiscalCodeForm.controls.surname.value, this.fiscalCodeForm.controls.name.value, this.fiscalCodeForm.controls.date.value, this.fiscalCodeForm.controls.sex.value, this.fiscalCodeForm.controls.birthPlace.value);
      this.success = true;
    } else {
      this.success = false;
      this.errorMessage = "Sorry, birth place not found";
    }

    console.log("VALID");
  }
}
