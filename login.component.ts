import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  flag:boolean=false;
  myForm:FormGroup;
  constructor(private refRouter:Router){
  this.myForm = new FormGroup({
   username:new FormControl("",[Validators.required]), // username object <-- FormControl
   password:new FormControl("",[Validators.required])
  });
   console.log(this.myForm);
   
  }//close the constructor

 //getter method
 get myFc(){
   return this.myForm.controls;
 }
  //validation method
  validation():void{
   if(this.myForm.valid){
      const {username,password}=this.myForm.value;//
        setTimeout(()=>{
        if(username=="admin" && password=="admin123"){
            alert('Welcome to dashboard')
            localStorage.setItem('username',username);
          //we need to redirect to another page i.e. dashboard
          // With the help of routing
          this.refRouter.navigate(['/dashboard']);
        }else{
           this.flag=true;
            //this.myForm.reset();
          }
        this.myForm.reset();
        },2000);
      }else{
      alert('Plz Enter Username and Password')
   }
  }

}
