package com.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Employee;
@CrossOrigin
@RequestMapping("/api/v0")
@RestController
public class EmployeeController {
    @GetMapping("/welcome")
	public String getWelcomeMessage() {
		return "Welcome to Spring Boot REST API!";
	}
	@GetMapping("/getHTMLView")
	public String getEmployeeView() {
//		model / provides data
		Employee employee = new Employee(1,"Sam",500);
		String htmlString = "";
		htmlString += "<!DOCTYPE html>";
		htmlString += "<html lang=\"en\">";
		htmlString += "<head>";
		htmlString += "    <title>Bootstrap forms</title>";
		htmlString += "    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\" rel=\"stylesheet\">";
		htmlString += "    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js\"";
		htmlString += "        integrity=\"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM\"";
		htmlString += "        crossorigin=\"anonymous\"></script><script>alert(\"welcome \");</script>";
		htmlString += "</head>";
		htmlString += "<body>";
		htmlString += "    <div class=\"container\" style=\"margin:50px;background-color:aquamarine;padding:50px;border-radius: 25px;\">";
		htmlString += "        <h1>Employee Data</h1> <br><br>";
		htmlString += "        <h2>" + employee.getId() + "</h2>";
		htmlString += "        <h2>" + employee.getName() + "</h2>";
		htmlString += "        <h2>" + employee.getSalary() + "</h2>";
		htmlString += "        <pre>Thank you .    <br>. . . Have a wonderful day       !!!! </pre>";
		htmlString += "    </div>";
		htmlString += "</body>";
		htmlString += "</html>;";
		return htmlString;
	}

    @GetMapping("/employee")
    public Employee getEmployee() {
        return new Employee(1, "Sam", 500);
    }

    	@GetMapping("/employees")
	public List getEmployeeList() {
		List<Employee> employeeList = new ArrayList<>();
		employeeList.add( new Employee(5555, "JumboJets", 55));
        employeeList.add(new Employee(6, "Nelson", 500));
        employeeList.add(new Employee(7, "Aayush The Billionare Boss!", 5000000));
//		return "{id : 1}";
		return employeeList;
	}
	@GetMapping("/employeeMap")
	public Map getEmployeeMap() {
		Map<Integer,Employee> employeeMap = new TreeMap<>();
		employeeMap.put(5, new Employee(5, "JumboJets", 55));
		employeeMap.put( 5555,new Employee(5555, "JumboJets", 55));
//		return "{id : 1}";
		return employeeMap;
	}

    // {
    //     "employees": [
    //       {
    //         "id": "5",
    //         "name": "JumboJets",
    //         "salary": "5"
    //       },
    //       {
    //         "id": "6",
    //         "name": "Nelson",
    //         "salary": "500"
    //       },
    //       {
    //         "id": "7",
    //         "name": "Aayush The Boss!",
    //         "salary": "5000000"
    //       }
    //     ]
    //   }
}
