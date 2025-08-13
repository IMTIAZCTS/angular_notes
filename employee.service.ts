import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:Employee[]=[
    {eid:1001,ename:'RAJU',esalary:30000.00},
    {eid:1002,ename:'SUNIL',esalary:100000.00},
    {eid:1003,ename:'MAHESH',esalary:90000.00},
    {eid:1004,ename:'HANEEF',esalary:80000.00},
    {eid:1005,ename:'SAJID',esalary:70000.00},

  ];
  constructor() { 
   }

  getAllEmployees():Employee[]{
    //write the logic to get all employees
    return this.employees;
  }

  addEmployee(employee:Employee):void{
    //write the logic to add the employee
     this.employees.push(employee);
  }
  getEmployeeById(eid:number):Employee|undefined{
    // Getting each employee from employees array store in vairable i.e. employee and verify it
    return this.employees.find(employee=> eid==employee.eid)
  }
  updateEmployee(employee:Employee){
    //write the logic to update the employee;
       let indexofEmployee = this.employees.findIndex(emp=>emp.eid==employee.eid);
       if(indexofEmployee!=-1)
        this.employees[indexofEmployee]=employee;

  }

  deleteEmployee(id:number){
    //write the logic to delete the employee;
    this.employees.splice(id,1);
  }
}
