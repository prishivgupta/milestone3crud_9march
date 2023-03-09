import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  // creating a parameterized constructor to get employee services
  constructor(private employeeService: EmployeesService) {}

  // declaring and initializing the variables
  employees: Employee[] = [];
  id?: number;
  
  // function to get all the employees from service layer and store it in employees array
  getAllEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(employees => this.employees = employees);
  }

  // function to delete the employee 
  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => this.getAllEmployees());
  }

  // calling the ngOnit lificycle hook to load all the employees
  ngOnInit(): void {
    this.getAllEmployees();
  }
}
