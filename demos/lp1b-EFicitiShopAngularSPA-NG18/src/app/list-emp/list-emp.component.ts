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

  employees: Employee[]; // array of Employee objects
  // employeeService: EmployeeService;

  constructor(private employeeService: EmployeeService, private router: Router) {
    // this.employeeService = employeeService;
  }
  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employeeData: Employee[]) => {
      this.employees = employeeData;
    });
  }

  updateEmployee(employeeId : number | undefined) {

  }
 deleteEmployee(toDeleteEmployee : Employee) :void {
    // this.employeeService.deleteEmployee().subscribe((data) => {
    //   this.employees = this.employees.filter(emp => emp.id !== 1);
    // });
  }
}
