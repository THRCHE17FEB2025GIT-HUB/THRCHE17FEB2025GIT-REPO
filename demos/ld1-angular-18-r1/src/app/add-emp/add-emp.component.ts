import { Component } from "@angular/core";
import { ReactiveFormsModule, FormBuilder, FormGroup } from "@angular/forms";
import { EmployeeService } from "../service/employee.service";

@Component({
    selector: 'app-add-emp',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './add-emp.component.html',
    styleUrls: ['./add-emp.component.css']
})

export class AddEmpComponent {
    // The addForm property is a FormGroup object.
    addForm: FormGroup;
    constructor(private formBuilder: FormBuilder,
        private employeeService: EmployeeService) {
        this.addForm = this.formBuilder.group({
            id: [100],
            name: ["Rambo"],
            salary: [500],
            employeeRole: []
        });
    }

    saveEmployee() {
        console.log("posting details to server through employee service");
        console.log(this.addForm.value);
        this.employeeService.createEmployee(this.addForm.value)
            .subscribe(data => {
                console.log('data saved ' + data);
            });
    }
}