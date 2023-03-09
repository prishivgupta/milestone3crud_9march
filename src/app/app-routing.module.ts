import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Pages/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Pages/edit-employee/edit-employee.component';
import { EmployeesComponent } from './Pages/employees/employees.component';

// routes for all the different components
const routes: Routes = [
  { path:'employees', component: EmployeesComponent },
  { path: '', redirectTo:'employees', pathMatch:'full' },
  { path:'employees/addEmployee', component: AddEmployeeComponent },
  { path:'employees/editEmployee/:id', component: EditEmployeeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
