import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmployeesService } from 'src/app/Services/employees.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  // creating a parametrized constructor to call the employee service, location
  constructor(private employeeService: EmployeesService, private location: Location) {}

  // creating an employee object to store data
  employee: Employee = {
    id: 0,
    employeeName: '',
    address: '',
    phone: 0,
    country: ''
  };

  // function to go back to previous page
  goBack(): void {
    this.location.back();
  }

  // function to call edit employe from service layer
  addEmployee(employee: Employee): void {
    this.employeeService.addEmployee(employee).subscribe(() => this.goBack());
  }
}
