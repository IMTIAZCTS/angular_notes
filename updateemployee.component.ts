import { escapeRegExp } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updateemployee',
  imports: [FormsModule,CommonModule],
  templateUrl: './updateemployee.component.html',
  styleUrl: './updateemployee.component.css'
})
export class UpdateemployeeComponent {
eid:number;
employee:any={eid:0,ename:'',esalary:0.0};
employee1:Employee={eid:0,ename:'',esalary:0.0};
  constructor(private activeRouteRef:ActivatedRoute,private employeeServiceRef:EmployeeService,private route:Router){
   this.eid=Number(this.activeRouteRef.snapshot.paramMap.get('eid'));
   this.employee = this.employeeServiceRef.getEmployeeById(this.eid);
   console.log(this.employee)
    
  }

  updateEmployee():void{
    this.employeeServiceRef.updateEmployee(this.employee);
    this.route.navigate(['/dashboard/employees']);

  }
}
