package com.Crud.Employee.Services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Crud.Employee.Entity.EmployeeEntity;
import com.Crud.Employee.Model.Employee;
import com.Crud.Employee.Repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	
	@Autowired
	private  EmployeeRepository employeeRepository;
	
	
	

	@Override
	public Employee createEmployee(Employee employee) {
		EmployeeEntity employeeEntity=null;
		
		BeanUtils.copyProperties(employee,employeeEntity);
		employeeRepository.save(employeeEntity);
		return employee;
		
		
		
	}
	
	@Override
	public List<Employee> getAllEmployees(){
		List<EmployeeEntity> employeeEntitites=employeeRepository.findAll();
		List<Employee> employees=employeeEntitites.stream()
				.map(emp -> new Employee(emp.getId(),emp.getFirstName(),emp.getFirstName(),emp.getEmailId())).collect(Collectors.toList());
	return employees;
	}
	
	
	
	
	
}
