
import { HttpClient } from "@angular/common/http";
import {Employee } from "../model/employee.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    baseUrl : string = 'http://localhost:3001/employees';
    // httpClient? : HttpClient;
    // constructor(httpClient : HttpClient){
    //     this.httpClient = httpClient;
    // }
    constructor(private httpClient : HttpClient){

    }
    getEmployees(){
        console.log("Iniside employees service!")
        return this.httpClient.get<Employee[]>(this.baseUrl);
    }
    createEmployee(employee : Employee){
        return this.httpClient.post(this.baseUrl,employee);
    }
}