import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  imports: [FormsModule,CommonModule],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent {
employee:Employee={eid:0,ename:'',esalary:0.0};
 constructor(private employeeServiceRef:EmployeeService,private routerRef:Router){}
 storeData(){
  this.employeeServiceRef.addEmployee(this.employee);
  console.log(this.employee)
  this.routerRef.navigate(['/dashboard/employees']);
   
  } 
 
}
