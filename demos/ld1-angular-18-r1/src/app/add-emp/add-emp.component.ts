import { Component } from "@angular/core";
import { ReactiveFormsModule, FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-add-emp',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './add-emp.component.html',
    styleUrls: ['./add-emp.component.css']
})

export class AddEmpComponent {
    // The addForm property is a FormGroup object.
   addForm : FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.addForm = this.formBuilder.group({
            id: [],
            name: [],
            salary: []
        });
    }
}