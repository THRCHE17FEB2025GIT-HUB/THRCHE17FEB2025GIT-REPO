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
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'The ld1-angular-18-r1 App';

// The employees property is an array of Employee objects.
  employees? : Employee[];
  constructor(private employeeService : EmployeeService){

  }
  ngOnInit(): void {
    console.log("asynchronously fetching data from endpoint!")
    this.employeeService.getEmployees().subscribe(datafromExeternalService => this.employees = datafromExeternalService);
    console.log(this.employees)
  }
}
