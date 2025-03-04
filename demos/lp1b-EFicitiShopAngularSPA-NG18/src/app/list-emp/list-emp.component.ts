import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-list-emp',
  //  standalone: true,
  // imports: [],
  templateUrl: './list-emp.component.html',
  styleUrl: './list-emp.component.css'
})
export class ListEmpComponent implements OnInit {

  employees!: Employee[]; // array of Employee objects
  // employeeService: EmployeeService;

  constructor(private employeeService: EmployeeService, private router: Router) {
    // this.employeeService = employeeService;
  }
  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employeeData: Employee[]) => {
      this.employees = employeeData;
    });
  }

  updateEmployee(employeeId : number | undefined) : void {
   if(employeeId !== undefined) {
    this.router.navigate(['update', employeeId]);
   }
   else
   {
    console.log("Employee Id is undefined")
   }
  }

    // Purpose : To delete an employee
  // Input : Employee object

  deleteEmployee(toDeleteEmployee: Employee): void {
    if (toDeleteEmployee.id !== undefined) {
      // deleting the employee from the list
      this.employeeService.deleteEmployee(toDeleteEmployee.id).subscribe((employee) => {
        this.employees = this.employees.filter(employee => employee.id !== toDeleteEmployee.id);
      })
    }
  }
}
