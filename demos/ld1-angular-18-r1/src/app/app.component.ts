import { Component, OnInit } from '@angular/core';
// The import keyword is used to import functions exported by an external module.
// The OnInit interface is used to define a lifecycle hook for the Angular component.
// The Component decorator is used to define the metadata for the Angular component.
// The Component decorator is a function that takes a metadata object as an argument.
// The metadata object contains the configuration information for the component.

import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './service/employee.service';
import { Employee } from './model/employee.model';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './app.component.html',
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule],

  // ` in the template string is used to define a multi-line string.
  // The ` was introduced in ECMAScript 6 (ES6) and is used to define template literals.
  // The template property is used to define the HTML template for the Angular component.
  // The template is the view of the Angular component.
  // template: inline HTML code directly in component
  // templateUrl: refers to external HTML file
  // template is faster since browser doesn't need to make separate HTTP request
  // templateUrl is better for larger templates and separation of concerns
//   template: `<h1>Our app is running successfully!</h1>
// <!-- {{employees}} -->
// <ol *ngFor="let employee of employeesList">
// <li>{{employee.id}}</li>
// <li>{{employee.name}}</li>
// <li>{{employee.salary}}</li>
// </ol>`,
  styleUrl: './app.component.css',
  // styles: [`h1 { color: blue; }`],
  // The styles property is used to define the CSS styles for the Angular component.
})
export class AppComponent  implements OnInit{
  title = 'The ld1-angular-18-r1 App'

// The employees property is an array of Employee objects.
  employeesList? : Employee[];
  constructor(private employeeService : EmployeeService){

  }
  ngOnInit(): void {
    console.log("asynchronously fetching data from endpoint!")
    this.employeeService.getEmployees().subscribe(datafromExeternalService => this.employeesList = datafromExeternalService);
    console.log(this.employeesList)
  }
}
