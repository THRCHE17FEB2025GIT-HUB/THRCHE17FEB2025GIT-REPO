
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../model/employee.model";


@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    // baseUrl : string = 'http://localhost:3000/employees';
    baseUrl : string = 'http://localhost:8080/api/v1/employees';
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

    getEmployeeById(id : number){
        return this.httpClient.get<Employee>(this.baseUrl + '/' + id);
    }
    createEmployee(employee : Employee){
        return this.httpClient.post(this.baseUrl,employee);
    }
    updateEmployee(id:number, employee : any){
        // The `${this.baseUrl}/${id}` is a template string. It is used to concatenate the baseUrl and id.
        return this.httpClient.put(`${this.baseUrl}/${id}`,employee);
    }
    deleteEmployee(id : number) {
        return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }
}