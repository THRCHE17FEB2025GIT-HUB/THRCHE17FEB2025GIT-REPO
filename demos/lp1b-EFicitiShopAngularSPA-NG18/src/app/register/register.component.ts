import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  //  standalone: true,
  // imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // The ! (exclamation mark) is a non-null assertion operator. It tells the TypeScript compiler that the variable is not null or undefined.
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      adminName: ['admin', 
          [Validators.required, Validators.minLength(4),Validators.maxLength(10)]],
      email: ['a@a.com', [Validators.required, Validators.email]],
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    console.log('Form submitted successfull : ', this.registerForm.value);
  }
}
