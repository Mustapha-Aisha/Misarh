import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css'],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
  ]
})
export class ShippingFormComponent implements OnInit {
  shippingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.shippingForm = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', [Validators.required]], 
    });
  }

  ngOnInit(): void {
  
  }

  onSubmit(): void {
    if (this.shippingForm.valid) {
      // Handle form submission
      console.log(this.shippingForm.value);
    }
  }
}
