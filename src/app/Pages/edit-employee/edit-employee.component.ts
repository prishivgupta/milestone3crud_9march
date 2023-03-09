import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { EmployeesService } from 'src/app/Services/employees.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  // creating a parametrized constructor to call the employee service, location and active route
  constructor(private employeeService: EmployeesService, private location: Location, private route: ActivatedRoute) {}

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
  editEmployee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(() => this.goBack());
  }

  // function to get a particular employee by id and storing its data in employee object
  getEmployeeById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(id).subscribe(employee => {
      this.employee.id = employee.id,
      this.employee.employeeName = employee.employeeName,
      this.employee.address = employee.address,
      this.employee.phone = employee.phone,
      this.employee.country = employee.country
    });
  }

  // calling the ngOnit lificycle hook to load get employee by id
  ngOnInit(): void {
    this.getEmployeeById();
  }
}
