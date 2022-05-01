package com.Crud.Employee.Services;

import java.util.List;

import com.Crud.Employee.Model.Employee;

public interface EmployeeService {

	Employee createEmployee(Employee employee);

	List<Employee> getAllEmployees();

}
