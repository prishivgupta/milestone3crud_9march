import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  // url of the json server
  baseUrl: string = "http://localhost:3000/";

  // function to handle the error
  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error message occured:', error.error.message);
    } else {
      console.error(error.error)
    }
    return throwError('Something happened, please try again');
  }

  // get all employees service 

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + 'employees').pipe(catchError(this.handleError))
  }

  // get a particular employee by id service

  getEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + `employees/${id}`).pipe(catchError(this.handleError))
  }

  // add an employe service

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'employees', employee).pipe(catchError(this.handleError))
  }

  // update a particular employee service

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put<any>(this.baseUrl + `employees/${employee.id}`, employee).pipe(catchError(this.handleError))
  }

  // delete an employee service

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `employees/${id}`).pipe(catchError(this.handleError))
  }
}
