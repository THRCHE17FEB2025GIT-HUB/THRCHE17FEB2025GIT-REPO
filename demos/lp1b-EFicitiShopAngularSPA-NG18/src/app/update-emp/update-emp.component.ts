import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-emp',
  //  standalone: true,
  // imports: [],
  templateUrl: './update-emp.component.html',
  styleUrl: './update-emp.component.css'
})
export class UpdateEmpComponent implements OnInit {
  id: number = 0;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {
  }
  // Observables are a powerful feature of Angular that allow you to work with asynchronous data streams.
  // The subscribe() method is used to subscribe to the observable and listen for emitted values.
  // The subscribe() method takes two arguments: a success callback and an error callback.
  // The success callback is called when the observable emits a value, and the error callback is called when an error occurs.
  // The success callback receives the emitted value as an argument, and the error callback receives the error as an argument.
  // The subscribe() method returns a subscription object that you can use to unsubscribe from the observable.
  // This is important because it allows you to clean up resources and prevent memory leaks.
  // In this example, we are subscribing to the observable returned by the employeeService.updateEmployee() method.
  // We are passing two arrow functions as arguments to the subscribe() method: one for the success callback and one for the error callback.
  // The success callback logs the updated employee to the console, and the error callback logs the error to the console.
  // After the employee is updated, we navigate back to the employees list view using the router.navigate() method.
  // The complete callback is called when the observable completes, which means that all the data has been received from the server.

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // Observables are a powerful feature of Angular that allow you to work with asynchronous data streams.
    this.employeeService.getEmployeeById(this.id)
      // The subscribe() method is used to subscribe to the observable and listen for emitted values.
      .subscribe({
        // The success callback receives the emitted value as an argument,
        next: (searchedEmployee) => {
          this.employee = searchedEmployee;
          console.log("The employee data has been fetched successfully " , this.employee);
          // this.router.navigate(['/employees'])
        },  
        // and the error callback receives the error as an argument.
        error: (errorFromServer) => {
          console.log(errorFromServer);
        },
        complete: () => {
          console.log("All data received from server")
        }
      })
      console.log("Completed request!")
      // this.router.navigate(['/employees'])
  }
  // errorCallback(errorFromServer:any) {
  //   console.log(errorFromServer);
  // }
  // successCallback(searchedEmployee:any) {
  //   this.employee = searchedEmployee;
  // }
  //succss callback 
  // error callback

  updateEmployee(): void {
    // Method definition that handles the employee update operation, returns void
    this.id = this.id | 1;
    this.employeeService.updateEmployee(this.id, this.employee)
      // Calls the service method with employee ID and updated employee object
      // This likely makes a PUT/PATCH HTTP request to the backend API
      .subscribe({
        // Using modern Observable subscription syntax with named callbacks
        next: (updatedEmployee) => {
          // Success callback receiving the updated employee from the API response
          console.log('Employee updated:', updatedEmployee);
          // Logs the successful update with the returned employee data
          this.router.navigate(['/employees']);
          // Programmatically navigates back to the employees list view
        },
        error: (error) => {
          // Error callback handling any HTTP or processing errors
          console.error('Update failed::', error);
          // Logs any errors that occur during the update operation
        }
      });
    }
}