import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  //  standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  // Constructor vs ngOnInit comparison:
  // Constructor:
  // - Initializes class members
  // - Called first when component is created
  // - Best for DI setup and simple initializations
  // - Avoid complex operations here
  //
  // ngOnInit:
  // - Lifecycle hook called after constructor
  // - Component properties are available
  // - Best for complex initializations
  // - Data fetching and form setup
  // - Called only once after component is ready

  // Difference initializing the formBuilder in the constructor vs ngOnInit:
  // - Constructor: Form is initialized when the component is created
  // - ngOnInit: Form is initialized after the component is created
  // - Use ngOnInit for complex form setup
  // - Use constructor for simple form setup
  // - Form initialization in constructor is common practice
  constructor(private formBuilder: FormBuilder, private router: Router) {
    console.log("LoginComponent constructor called");
    this.loginForm = this.formBuilder.group({
      loginid: ["angular", [Validators.required, Validators.minLength(4)]],
      password: ["ngpass", [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit() {
    console.log("LoginComponent ngOnInit called");
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('Form Validation Failed');
      return;
    }

    const formData = this.loginForm.value;

    if (formData.loginid === "angular" && formData.password === "ngpass") {
      console.log("Login successful");
      sessionStorage.setItem("loggedIn", "yes");
      this.router.navigate(["/employees"]);
    }

  }
}
