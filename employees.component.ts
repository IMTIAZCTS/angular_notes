import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
 employees?:Employee[];

  constructor(private employeesRef:EmployeeService,private routerRef:Router){
     console.log(this.employeesRef.getAllEmployees())
     this.employees=this.employeesRef.getAllEmployees();
  }



  updateEmployee(id:number){
    // this.employeesRef.updateEmployee(id);
     this.routerRef.navigate(['/dashboard/updateemployee',id]);
  }

  deleteEmployee(id:number){
    this.employeesRef.deleteEmployee(id);
     this.routerRef.navigate(['/dashboard/employees']);
  }
}
