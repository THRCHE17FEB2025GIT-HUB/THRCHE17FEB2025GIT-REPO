import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";
import { RegisterComponent } from "./register/register.component";
import { AppRoutingModule } from "./app-routing.module";
import { EmployeeService } from "./service/employee.service";


@NgModule({
    imports: [BrowserModule,
        // HttpClientModule,
        // ReactiveFormsModule,
        // FormsModule,
        AppRoutingModule,
    ],
    declarations: [AppComponent, LoginComponent, ListEmpComponent, UpdateEmpComponent, RegisterComponent,],
    bootstrap: [AppComponent],
    providers: [EmployeeService]
})
export class AppModule {

}