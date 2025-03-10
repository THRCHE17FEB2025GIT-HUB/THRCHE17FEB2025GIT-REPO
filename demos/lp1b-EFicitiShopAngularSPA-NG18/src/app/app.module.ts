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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UseStandaloneComponentInModuleComponent } from "./use-standalone-component-in-module/use-standalone-component-in-module.component";


@NgModule({
    declarations: [ AppComponent, LoginComponent, ListEmpComponent, UpdateEmpComponent, RegisterComponent,],
    imports: [BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        // UseStandaloneComponentInModuleComponent
    ],
    bootstrap: [AppComponent],
    providers: [EmployeeService]
})
export class AppModule {

}