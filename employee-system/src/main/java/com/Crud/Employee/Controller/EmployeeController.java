package com.Crud.Employee.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Crud.Employee.Model.Employee;
import com.Crud.Employee.Services.EmployeeService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

	@Autowired
	 private  EmployeeService employeeService;

	 
	 @PostMapping("/employees")
	 public Employee createEmployee(@RequestBody Employee employee) {
		 return employeeService.createEmployee(employee);
	 }
	 
	 @GetMapping("/employees")
	 public List<Employee> getAllEmployees(){
		 return employeeService.getAllEmployees();
	 }

	
}
