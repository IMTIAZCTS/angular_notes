# angular_notes
- Why Angular
- Before Angular generally how the developer were doing the DOM manipulation.
- How Angular is helping to reduce the code.
- Single Page Application
- Setting up Angular CLI
- Creating the First Angular Application(19)
- Understanding of entire folder structure.
- Architecture of Angular.
   1. Component
   2. DataBinding
   3. Directives
   4. Angular Form
   5. Routing
   6. Service, DI
   7. JSON-Server
   8. Pipes
   9. RxJS
- Capston Project
------------------------------------------------------------------------------------------------------------------------
# Q1. What is Angular?
- Angular is a Typescript-based web-application framwork.
- Developed by Google.
- To develop the Single-Page-Application(SPA)
- Comonent based architecture
----------------------------------------------------------------------------------------------------------------------------
# Angular Architecture
-------------------------------------------
- Module
- Component
- Template
- Directives
- Services
-----------------------------------------------------------------------------
# Difference between Angular and AngularJS
-------------------------------------------------------------------------------
# AngularJS                             vs                    Angular
- It uses javascript                                    It uses typescript
- MVC                                                   Components-based
- No support for mobile                                 Yes
- It is less performance                                Fast performance
--------------------------------------------------------------------------------------
# Version History of Angular
- URL : https://en.wikipedia.org/wiki/Angular_(web_framework)

------------------------------------------------------------------------------------------------------------------------------------------------------
# What is NodeJS?
---------------------------
- It is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.
- It is built on Google Chrome V8 Javascript engine.
- We can use for backend services.
------------------------------------------------------------------------------
# Why we are using the node js for angular?
- In order to develop, test and serve the angular application efficiently
  we can use the node js
-----------------------------------------------------------------------------
# What is NPM?
- It stand for node package managment.
- It basically used to manage and install the packages/modules in the 
   application(nodejs) , angular(app).
----------------------------------------------------------------------------
## 🚀 What is Angular CLI?

Angular CLI (Command Line Interface) is a powerful tool provided by the Angular team to streamline the development workflow of Angular applications. It simplifies and automates many tasks, making it easier to manage projects efficiently.

### ✨ Key Features

Angular CLI helps you:

- 📦 **Create** new Angular applications with a single command
- 🛠️ **Develop** applications using built-in development server and tools
- 🏗️ **Build** optimized production-ready bundles
- 🧪 **Test** your application with unit and end-to-end testing support
- 🔧 **Maintain** your codebase with consistent structure and tooling

Using Angular CLI ensures a smooth and standardized development experience across teams and projects.

------------------------------------------------------------------------------------------
1. Creating an angular application
> npm install -g @angular/cli   <----- It will install the angular in my machine
-> In order to create the specific version of angular we use the following:
> npm install -g @angular/cli@19 <----- It will install the angular in my machine of 19 version.
-> Now we have successfully install the angular in my machine
-> We need to create a new project
> ng new myapp
-------------------------------------------------------------------------------------------------
-> By default angular will provide 2 things for use:
1. Root Module i.e. is AppModule

app.module.ts
--------------
```
@NgModule(
{
    declarations:[
      AppComponent,          // <--- Declaraing all the components
    ],
    imports:[],
    providers:[],
    bootstrap:[AppComponent]  // <-- this is root component

}

)
export class AppModule{

}
```
2. Root Component i.e. is AppComponent
=====================================================================================================
Day2:
----------------------------------------------------------------------------------------------------------
-> Let's add the bootstrap in angular project
Step1: Install the bootstrap
>npm install bootstrap
Step2: Inside the angular.json we have configure the styles and script:
```
"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
```
Step3: Inside the app.component.html
```
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
```
Step4: Test it
 http://localhost:4200/
------------------------------------------------------------------------------------------------------
Q. What is Component in anuglar?
Ans
- The component is a class which represents certain section of web-page for example
   home, login, register, service, aboutus etc...
- The component class includes following :
         I.   Properties : It is used to store the data
         II.  Methods    : To persome some actions

- We use the following decorator to declare the class as component:
```
  @Component(meta-data)
  export class ClassName{
       //properties
       //methods
  }
```
Meta-Data
-----------
1. selector  : It is used to represents the selector(tag) in order to invoke the component.
2. imports   : Here we can get other components to use inside it.
3. 
  I.  template : It is used to represent the template content of the component.
  II. templateUrl : It is used to represent the HTML file that has to be rendered when the component is invoked.
4. styleUrls   : It is used to represent the list of styles sheets(CSS) files that hve to be loaded when the component is invoked.
5. providers   : It is used to represents the list of services to be imported into the component.
6. animation  : It is used to represents the list of animations to be performed in the component.
7. standalone  : It is used to refersw a new way of building the component without declaration inside the
                 app.module.ts (i.e. NgModule) , this is added since from angular 14 , generally it is make standard              
                 from angular 15.
---------------------------------------------------------------------------------------------------------------
Q. What is Module?
Ans:
-> It is part of the angular project, which basically contains the following things:
     - A group of Components, Directives ,Pipes.
  DashboardModule
   |-> ProductComponent
   |-> CategoryComponent
   |-> OrderComponent
   |-> PaymentComponent
 etc...
Note : Every angular applicaiton should contain at least one moudle and one component, they have provided
1. AppModule as a root module
2. AppComponent as a root component.

-> It is class  with @NgModule decorator.
```
@NgModule({
    declarations:[
      AppComponent,          // <--- Declaraing all the components
    ],
    imports:[],
    providers:[],
    bootstrap:[AppComponent]  // <-- this is root component

})
export class AppModule{}
```
---------------------------------------------------------------------------------------------------------------------
Q. What is Decorator?
Ans
-  A decorator is a function which basically provide the meta information to the class.
-  Angular uses the decorator to define and configure the following:
	 -> components --> @Component
         -> modules    --> @NgModule
         -> services   --> @Injectable
         -> directive  --> @Directive
         -> pipe       --> @Pipe
         -> input      --> @Input
         -> output     --> @Output
etc....
----------------------------------------------------------------------------------------------------------------
When the angular is creating the component i.e. AppComponent , what are the files will be created?
Ans:
-  The following are the 4 files.
   app.component.ts  <---------- TypeScipt(class)
   app.component.spec.ts <-------- Testing file
   app.component.html    <---------- Template(view)
   app.component.css     <-------------  styles
------------------------------------------------------------------------------------------------------------------
Q. How we can create our own component?
Ans:
- We can use the following command:
  > ng generate component componentname options

-------------------------------------------------------------------------------------------------------------------
2. Template
- It is used to represent the data(which is coming from components properties) which is coming from components.
-----------------------------------------------------------------------------
Data-Binding
------------
-> The data-binding is nothing but communication /relation b/w "component" and "template".
-> When the value of "component" is changed, the "template" will be changed automatically,
   When the value of "template" is changed, the "component" will be changed automatically.
-> The following are the different types of data-binding:
I. Interpolation binding
--------------------------
syntax:  {{propertyName}}
- It is used to display the value of the property inside the template.
- If we changes the value inside the component,automatically it will refelct inside the template.
- It is one-way
Example:
------------------------------------------------------------------------------------------------------
Step1: app.component.ts
```
import { Component } from '@angular/core';
 @Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppComponent';
  name="RAJU"; 
  salary=3000.00;
  des="Java Developer";
  
}
```
Step2: app.component.html
```
<h1>Welcome to {{title}} Page</h1>
<hr/>
<h2>My Name is:{{name}}</h2>
<hr/>
<h2>My Salary:{{salary}}</h2>
<hr/>
<h2>My Desg is :{{des}}</h2>
```
--------------------------------------------------------------------------------------------------
2. Property Binding
---------------------
Syntax:
<tag [attribute]="propertyName"></tag>
- It is used to send the data from component to template and assign the same into an attribute of the tag.
- When the value of the property is changed, hte same value will be automatically updated in the
   template.

Example:
--------
Step1. app.component.html
```
<h1>Welcome to {{title}} Page</h1>
<hr/>
<h2>My Name is:{{name}}</h2>
<hr/>
<h2>My Salary:{{salary}}</h2>
<hr/>
<h2>My Desg is :{{des}}</h2>
<hr/>

<button class="btn btn-warning" (click)="action()">Action</button>
&nbsp;&nbsp;<span>{{status}}</span>
<hr/>
<button class="btn btn-info" (click)="change()">Change Action</button>
<hr/>
<button class="btn btn-primary" [disabled]="flag">Click here</button>
```
Step2:app.component.ts
```
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppComponent';
  name="RAJU"; 
  salary=3000.00;
  des="Java Developer";
  flag:boolean=true;
  status:string="Disabled";
  

  action():void{
    this.flag=false;
    this.status="Enabled"
  }

  change():void{
    this.flag=true;
    this.status="Disabled"
  }
}
```
==================================================================================================
3. Event Binding
----------------
-> In case of event binding the communication from template to component.
-> Syntax
-----------
<tag (event)="method()"></tag>
-It is used to pass the event notification from template to component.

Example:
--------
Step1:app.component.html
``` 
 <hr/>
<h2>Event Binding</h2>
<button (click)="action1()">Action-1</button><br/><br/>
<button (mouseover)="action2($event)">Action-2</button>
<br/>
 <input type="text" (input)="onChange($event)">
 <hr/>
 Message:{{msg}}
```

Step2:app.component.ts
```
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  msg="";
  action1():void{
    alert('Event Binding...')
  }

  action2(event:any):void{
    console.log(event)
  }
  onChange(event:Event):void{
    const a =event.target as HTMLInputElement;
    this.msg=a.value;
  }
}
```
$event
------
-> It is variable which is bascially used in event binding in order to refer the event object which is
   emitted by a DOM event i.e. click, input, mouseover, etc...

-> In case of javascript $event is an object which contain the information:
       target -> the element that bascially triggered the event
       target.value -> The value of the input field
       type  -> Here it means what type of event it is.
--------------------------------------------------------------------------------------------------
4.Two-ways Binding
-------------------
- In case of two-ways binding it is combination of the "property binding" and "Event Binding".

Syntax:
-------
``
 <tag [(ngModel)]="property"></tag>
```
- Here ngModel is a pre-define directive which help to enable the two-ways binding.
- Note: ngModel we cannot use directly inside the template until unware we have to import the
       Pre-Define Module i.e. FormsModule
            -> Before Angular 14 we suppose the configure the FormsModule inside the app.module.ts
              but since from angular 15 we can configure inside the components itself by using
              standalone:true

- When you change the value of property , the same will be automatically updated in the HTML element.
- When we change the value of HTML element, the same will be automatically  updated in the  property.
- Two-ways binding is applicable only for <input> and <select> tag.
- "FormsModule" must be imported in order to use the two-ways binding.
#Example:

Step1: app.component.ts
```
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 @Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  msg:string="Hi";
}

Step2:app.component.html
 
 <input [(ngModel)]="msg" />
 <hr/>

 Message:{{msg}}
```
Example2(select):
---------
Step1:app.component.ts
```
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  msg2:string="op1";
}
```
```
Step2:app.component.html
 Select:<select [(ngModel)]="msg2">
  <option value="op1">op1</option>
  <option value="op2">op2</option>
  <option value="op3">op3</option>

 </select>

Selection:{{msg2}}
```
------------------------------------------------------------------------------------------------------------------
##Directives
-----------
- Directives are classes that add additional behavior to elements in your Angular applications.
- The following are the categories of directives:

1. Build-In Directives
  a. Component -> In order to declare the compoent with decorator @Component({meta-data})
  b. Attribute -> It will focus on appearance of the elements, the following are the different attributes directives:
                  I. ngClass
                  II.ngStyle
                  III.ngModel : To achieve the two-ways communication
#style
--------
- It is used to set the css property value dynamically(i.e. runtime).
- When the value of the component property is changed, the value of css property will be automatically gets changed.

Syntax
------
```
<tag [style.cssProperty]="componentPropertyName"></tag>
```
##Example:
Step1: app.component.ts
```
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  msg:string="";
  grade:number=35;
  mycolor=""

  onChange(event:Event):void{
    if(this.grade==100) {  
    this.msg="Success";
    this.mycolor="green";  
  }
  else { 
    this.msg="Failure";
    this.mycolor="red";
  }
  }
}
```
##Step2: app.component.html
```
 <button (click)="onChange($event)">Action</button>
 <hr/>
 Message: <h2 [style.color]="mycolor">{{msg}}</h2>
```
ngClass
--------
- It is used to set the css class name dynamically.
- When the value of component property is changed, the css class will be automatically changed.
- This directive to set styles with multiple properties, conditionally at runtime.
Syntax
------
```
<tag [ngClass]="component.property"></tag>
```
Example
--------
Step1: app.component.css
```
.class1{
    color:green;
}

.class2{
    color:red;
}
```
# Step2:app.component.ts
```
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  msg:string="";
  grade:number=100;
  mycolor=""

  onChange(event:Event):void{
    if(this.grade==100) {  
    this.msg="Success";
    this.mycolor="class1";  
  }
  else { 
    this.msg="Failure";
    this.mycolor="class2";
  }
  }
}
```
##Step3:app.component.html
```
<button (click)="onChange($event)">Action</button>
 <hr/>
 Message: <h2 [ngClass]="mycolor">{{msg}}</h2>
```

III. ngStyle

- Difference between ngClass and ngStyle
-------------------------------------------------------------------------------------------------- 
c. Structural
--------------
- It is pre-define directives which is basically used to evalte the element based on some conditions.
- It is generally start with a symbol(*) asterisk.
- We can use inside the template.
- The following are the directives:
- 
1. *ngIf
2. *ngFor
3. *ngSwitch

1. *ngIf
-------
- It is use to displays the elements if the condition is true , otherwise the element will be deleted from the DOM.
Example
--------
app.component.ts
-----------------
```
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  flag:boolean=false;

  action():void{
    this.flag=true;
  }
}
```

##Step2:app.component.html
``` 
<button (click)="action()">Action</button>
 
<div *ngIf="flag;else othercond">
    <h1>Good Afternoon</h1>
</div>

<ng-template #othercond>
<h2>Updating Messaage...</h2>
</ng-template>
```
-------------------------------------------------------------------------------------------
II. *ngFor
--------------
- It is used to repeat the tag once for each element in the array.
- It generates(repets) the given content once for an element of the array.
-  We have take the a group of items to print in the <ul> list.
- We use prefix as "*" for ngFor.
- It is use basically used to dispaly the list of records like list of users details, product details, category details, payments details etc...
Syntax
--------
```
<tag *ngFor="let var of array">
    <!-- write the code here-->
</tag>
```
Example1:
---------
app.component.ts
```
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   items:any=['ITEM1','ITEM2','ITEM3','ITEM4','ITEM5'];

}
```
##app.component.html
```
 <div>
       <ul>
           <li *ngFor="let item of items;">
                {{item}}
           </li>
       </ul>
 </div>
```
#with index
----------
 ```
 <div>
       <ul>
           <li *ngFor="let item of items;index as i">
                {{item}} <span>Index:{{i}}</span>
           </li>
       </ul>
 </div>
```
--------------------------------------------------------------------------------------------------
##Q. What is the interface in  typescript?
Ans:
- In generally it is a specification of method prototype.
- But in case of typescript is used to define the structure for an object i.e. what properties
  it should have the respective data type.
#Example:
---------
Step1:
product.model.ts
-----------------
```
export interface Product{
id:number;
name:string;
price:number;
qt:number
}
```
Step2:
app.component.ts
----------------
```
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from './product.model';
 
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //           0         1        2     3      4
   //items:any=['ITEM1','ITEM2','ITEM3','ITEM4','ITEM5'];
   products:Product[]=[
     {
      id:1001,name:'Mobile',price:10000.00,qt:100
     }, //index-0
     {
      id:1002,name:'SSD',price:5000.00,qt:200

     }, //index-1
     {
     id:1003,name:'Mouse',price:500.00,qt:1000
   
     }, //index-2
     {
     id:1004,name:'RAM',price:7000.00,qt:200
   
     }, //index-3
     {
     id:1005,name:'Keyboard',price:200.00,qt:2000
     } //index-4
     ,
     {
      id:1006,name:'GraphicCard',price:56000.00,qt:100
     }
   ];
 
}
```
##Step3: app.component.html
```
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">PRODUCT_ID</th>
      <th scope="col">PRODUCT_NAME</th>
      <th scope="col">PRODUCT_PRICE</th>
      <th scope="col">PRODUCT_QT</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let p of products;">
        <td>{{p.id}}</td>
        <td>{{p.name}}</td>
        <td>{{p.price}}</td>
        <td>{{p.qt}}</td>
        
    </tr>
    
  </tbody>
</table>
```
-------------------------------------------------------------------------------------------------
##Nested
-------
##Step1:product.model.ts
```
interface Address{
    street:string;
    state:string;
    city:string;
}
export interface Product{
id:number;
name:string;
price:number;
qt:number;
address:Address;
}
```

##Step2: app.component.ts
```
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from './product.model';
 
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //           0         1        2     3      4
   //items:any=['ITEM1','ITEM2','ITEM3','ITEM4','ITEM5'];
   products:Product[]=[
     {
      id:1001,name:'Mobile',price:10000.00,qt:100,address:{
        street:'abc',state:'aa',city:'bb'
      }
     }, //index-0
     {
      id:1002,name:'SSD',price:5000.00,qt:200,address:{
        street:'bbc',state:'ee',city:'ff'
      }

     }, //index-1
     {
     id:1003,name:'Mouse',price:500.00,qt:1000,address:{
      street:'eee',state:'ere',city:'yy'
     }
   
     }, //index-2
     {
     id:1004,name:'RAM',price:7000.00,qt:200,address:{
      street:'qq',state:'qa',city:'qb'
     }
   
     }, //index-3
     {
     id:1005,name:'Keyboard',price:200.00,qt:2000,address:{
      street:'ka',state:'kb',city:'kc'
     }
     } //index-4
     ,
     {
      id:1006,name:'GraphicCard',price:56000.00,qt:100,address:{
        street:'ga',state:'gb',city:'gc'
      }
     }
   ];
 
}
```
##Step3: app.component.html
```
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">PRODUCT_ID</th>
      <th scope="col">PRODUCT_NAME</th>
      <th scope="col">PRODUCT_PRICE</th>
      <th scope="col">PRODUCT_QT</th>
      <th scope="col">ADDRESS</th>

    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let p of products;">
        <td>{{p.id}}</td>
        <td>{{p.name}}</td>
        <td>{{p.price}}</td>
        <td>{{p.qt}}</td>
        <td>{{p.address.street}},{{p.address.city}},{{p.address.state}}</td>
    </tr>
    
  </tbody>
</table>
```
-------------------------------------------------------------------------------------------------
- Make some changes in template , and added the pipe into the template.
- As of know we were using pipe i.e. lowercase and currency for the time being.
##app.component.html
------------------
```
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">PRODUCT_ID</th>
      <th scope="col">PRODUCT_NAME</th>
      <th scope="col">PRODUCT_PRICE</th>
      <th scope="col">PRODUCT_QT</th>
      <th scope="col">ADDRESS</th>

    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let p of products;">
        <td>{{p.id}}</td>
        <td>{{p.name | uppercase}}</td>
        <td>{{p.price | currency:'INR'}}</td>
        <td>{{p.qt}}</td>
        <td>{{p.address.street}},{{p.address.city}},{{p.address.state}}</td>
    </tr>
    
  </tbody>
</table>
```
--------------------------------------------------------------------------------------------------
- Next thing we have added the actions to perform update and delete the data from an array.
##app.component.ts
-----------------
```
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from './product.model';
 
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //           0         1        2     3      4
   //items:any=['ITEM1','ITEM2','ITEM3','ITEM4','ITEM5'];
   products:Product[]=[
     {
      id:1001,name:'Mobile',price:10000.00,qt:100,address:{
        street:'abc',state:'aa',city:'bb'
      }
     }, //index-0
     {
      id:1002,name:'SSD',price:5000.00,qt:200,address:{
        street:'bbc',state:'ee',city:'ff'
      }

     }, //index-1
     {
     id:1003,name:'Mouse',price:500.00,qt:1000,address:{
      street:'eee',state:'ere',city:'yy'
     }
   
     }, //index-2
     {
     id:1004,name:'RAM',price:7000.00,qt:200,address:{
      street:'qq',state:'qa',city:'qb'
     }
   
     }, //index-3
     {
     id:1005,name:'Keyboard',price:200.00,qt:2000,address:{
      street:'ka',state:'kb',city:'kc'
     }
     } //index-4
     ,
     {
      id:1006,name:'GraphicCard',price:56000.00,qt:100,address:{
        street:'ga',state:'gb',city:'gc'
      }
     }
   ];
 
   update(i:any):void{
     alert(i)
   }

   delete(i:any):void{
     let status=confirm('Do You Want to Delete it or not')
     if(status)
     this.products.splice(i,1);
   }
}
```
##app.component.html
```
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">PRODUCT_ID</th>
      <th scope="col">PRODUCT_NAME</th>
      <th scope="col">PRODUCT_PRICE</th>
      <th scope="col">PRODUCT_QT</th>
      <th scope="col">ADDRESS</th>
      <th scope="col"  cols="2">ACTION</th>

    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let p of products;index as i">
        <td>{{p.id}}</td>
        <td>{{p.name | uppercase}}</td>
        <td>{{p.price | currency:'INR'}}</td>
        <td>{{p.qt}}</td>
        <td>{{p.address.street}},{{p.address.city}},{{p.address.state}}</td>
        <td>
            <button class="btn btn-warning" (click)="update(i)">UPDATE</button>&nbsp;&nbsp;
            <button class="btn btn-danger" (click)="delete(i)">DELETE</button>

        </td>
    </tr>
    
  </tbody>
</table>
```
-----------------------------------------------------------------------------------------------
##Communication between Two Components i.e. Parent->Child and Child->Parent

##Step1: Created a Child Component by using the following command:
```
>ng g c child
```

##Step2: Inside the AppComponent we have return the following code:

app.component.ts
------------------
```
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ChildComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
parentMessage:string="";
msg:string='';
childMsgRec:string='';
sendData():void{
this.msg=this.parentMessage;
this.parentMessage='';
}
receivedData(dt:any){
  this.childMsgRec=dt;
}
}
Step2: app.component.html
 <hr/>
<h1>PARENT COMPONENT</h1>
Message:<input type="text" [(ngModel)]="parentMessage">
 &nbsp;&nbsp;<button (click)="sendData()" class="btn btn-info">SEND MESSAGE</button>
<hr/>
Child Message:{{childMsgRec}}

 <hr/>
 <app-child [pMsg]="msg" (rEvent)="receivedData($event)"></app-child>


 <hr/>
```
##Step3: Inside the child.component.ts we have received and send the data to parent
###child.component.ts
```
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 @Input() pMsg:any; // Here we were receving the data from the parent 
 @Output() rEvent=new EventEmitter<string>(); // We are create an event to send the data to parent
 replyMsg:string='';

 sendReplyToParent():void{
 this.rEvent.emit(this.replyMsg);
 this.replyMsg='';
 }
}
```
##Step4: Inside the child.component.html 
- Here we have written the code to print the parent message and we created a form to send the 
  data the parent.
```
<hr/>
<h1>CHILD-COMPONENT</h1>
Message:<strong>{{pMsg}}</strong>
<hr/>

Child Reply:<input type="text" [(ngModel)]="replyMsg"/>
&nbsp;&nbsp;<button (click)="sendReplyToParent()" class="btn btn-info">SEND REPLY TO PARENT</button>
```
------------------------------------------------------------------------------------------------
##Forms and Validation
---------------------
1. Template Driven form
------------------------
- It is best suitable for development of simple forms with the limited no of fileds and
   simple validation.
- They follow the a view-driven approach.
- In case of template driven form the forms are created and validations are handled directly
   in the template.
- In this form , each field its represented as a property in the component class.
- Validations rules are defined in the template by using HTML5 attributes and Validation messages
   are displayed using validation properties of angular.
- "FormsModule" should be imported from "@angular/forms" package.

#HTML5 attributes for validations:
-----------------------------------

1. required="required"   -> Field is mandatory
2. minlength="n"         -> Minimum no of characters
3. pattern="reg_exp"     -> Regular expression

##Validation Properties of angular
--------------------------------
1. touched
   - true     : Field is focused.
   - false    : Field is not focused.

2. untouched
   - true     : Field is not focused.
   - false    : Field is focused.

3. pristine
   - true     : Field is not modified by the user.
   - false    : Field is modified by the user.

4. dirty 
   - true     : Field is modified by the user
   - false    : Field is not modified by the user.

5. valid
    - true    : Field value is valid.
    - false   : Field value is invalid.

6. invalid
    - true    : Field value is invalid
    - false   : Fied value is valid.

7. errors   -> Which represents the list of errors of the fields
      - required  : True/false

      minlength : true/false
      pattern   : true/false
      number    : true/false
      email     : true/false
     
-------------------------------------------------------------------------------------
##Character classes
```
[abc]	a, b, or c (simple class)
[^abc]	Any character except a, b, or c (negation)
[a-zA-Z]	a through z or A through Z, inclusive (range)
[a-d[m-p]]	a through d, or m through p: [a-dm-p] (union)
[a-z&&[def]]	d, e, or f (intersection)
[a-z&&[^bc]]	a through z, except for b and c: [ad-z] (subtraction)
[a-z&&[^m-p]]	a through z, and not m through p: [a-lq-z](subtraction)
``` 
##Greedy quantifiers
------------------
```
X?	X, once or not at all
X*	X, zero or more times
X+	X, one or more times
X{n}	X, exactly n times
X{n,}	X, at least n times
X{n,m}	X, at least n but not more than m times
```

##HTM5 VALIDATION RULES
---------------------
```
S.No      Desc              Regular Expression   
----------------------------------------------------
1.     Only alphabets       ^[a-zA-Z]*$ 
2.     Digits only          ^[0-9]*$   or ^[\d]*$
3.     Mobile number        ^[6789]{1}[0-9]{9}$
4.     Username:
       (Alphabets, Digits    ^[a-zA-Z0-9-]+$
        & Hyphens only)
------------------------------------------------------
```
##Example1:
 ```
  <form>
    <label for="eid">EID:</label>
    <input type="text" name="eid" id="eid" required="required" [(ngModel)]="eid" #id="ngModel"/>
   <br/>
   <div *ngIf="id.touched && id.invalid">
       <span *ngIf="id.errors?.['required']">*EID is Mandatory</span>
   </div>
   Touched: {{id.touched}}<br/>
   UnTouched: {{id.untouched}}<br/>
   Valid: {{id.valid}}<br/>
   Invalid: {{id.invalid}}<br/>
   Errors: {{id.errors}}<br/>
   Dirty: {{id.dirty}}<br/>
   Pristine:{{id.pristine}}<br/>
    <input type="submit" value="STORE"/>
  </form>
 ```
------------------------------------------------------------------------------------------------------------------
##Q: What is ngForm?
Ans
- It is build-in angular directive which is automatically added to the <form> tag specially when we were working
   with template driven form.
- It is used to create and manages an instance of Angular NgForm class , which represent the entire form in the
  template.
- It basically allows to track and control the form state without manually creating a FormGroup in the component.

- We can access the values of the form by using following:

   - forms.value : In order to get the current form vield value.
   - forms.valid/forms.invalid : This is to check the status of validation
   - forms.controls : It will allow you to check the individual fields control.
--------------------------------------------------------------------------------------------------------------------
##Example : Template Driven Form
#Req: Create the Employee Form which contain the following fields:
-  EID of type number,
-  ENAME of type string,
-  ESALARY of type number
and StoreData method
##HTML 5 Validation
------------------
1. Eid:
-  Eid is mandatory : required
-  Eid should be 4 digits : pattern
2. ENAME
- Ename is mandatory           : required
- Ename should be 5 characters : minlength
3. ESalary
- Esalary is mandatory         : required
##Validation Properties of angular
--------------------------------
1. touched
2. invalide
3. errors
#Step1: Create the employee component
```
> ng g c employee
```
##Step2: Inside the app.component.html
 ```
 <app-employee></app-employee>
```
##Step3: Inside the app.component.ts
```
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
 eid?:number;
 ename:string="";
 esalary?:number;
 data:any;

 storeData(f:NgForm){
   if(f.valid){
    alert('valid....')
    console.log(f.value)
    console.log(f.valid)
    console.log(f.controls)
  //  this.data=f.value.eid+""+f.value.ename+""+f.value.esalary;
  this.data=f.value;
  }else{
    alert('invalid')
  }
 }
}
```
##Step4: Inside the app.component.html
 ``` 
  <form #myForm="ngForm">
    <label for="eid">EID:</label>
    <input type="text" name="eid" id="eid" required="required" pattern="[0-9]{4}" [(ngModel)]="eid" #id="ngModel"/>
   <br/>
   <div *ngIf="id.touched && id.invalid">
       <span *ngIf="id.errors?.['required']" class="e1">*EID is Mandatory</span>
       <span *ngIf="id.errors?.['pattern']" class="e1">*It Should be 4 Digits</span>
   </div>
   
   <label for="ename">ENAME:</label>
    <input type="text" name="ename" id="ename" required="required" minlength="5" [(ngModel)]="ename" #name="ngModel">
    <div *ngIf="name.touched && name.invalid">
        <span *ngIf="name.errors?.['required']" class="e1">*Name is Mandatory</span>
        <span *ngIf="name.errors?.['minlength']" class="e1">*Name Must be at least 5 character</span>
    </div>

    <label for="esalary">ESALARY:</label>
    <input type="text" name="esalary" id="esalary" required="required" [(ngModel)]="esalary" #sal="ngModel">
    <div *ngIf="sal.touched && sal.invalid">
        <span *ngIf="sal.errors?.['required']" class="e1">*Esalary is Mandatory</span>
    </div>

    <input type="submit" value="STORE" (click)="storeData(myForm)"/>
  </form>
 
 <hr/>
 Data:{{data | json}}
 <hr/>
```
-------------------------------------------------------------------------------------------------------------------
##Reactive Form / Model Driven Forms
-----------------------------------
- It is a new type of forms in angular, which is suitable for creating large forms with many fields and complex
   validations.
- In this form , each field is represented as "FromControl" and group of control is represented as "FormGroup"
- We need to import "ReactiveFormsModule" from "@angular/forms" package.
- Validation rules are defined in the component by uisng "Validators" object of angular and validate message
   are displayed in the template by using Validation Properties of angular.
##Validaitons in Reactive Forms
-----------------------------
1. Validators.required  -> Field is mandatory.
2. Validators.minLength -> Minimum no of characters
3. Validators.maxLength -> Maximum no of characters
4. Validators.pattern   -> Regular expression
##Validation Properties
----------------------
1. touched
   - true     : Field is focused.
   - false    : Field is not focused.

2. untouched
   - true     : Field is not focused.
   - false    : Field is focused.

3. pristine
   - true     : Field is not modified by the user.
   - false    : Field is modified by the user.
4. dirty 
   - true     : Field is modified by the user
   - false    : Field is not modified by the user.
5. valid
    - true    : Field value is valid.
    - false   : Field value is invalid.
6. invalid
    - true    : Field value is invalid
    - false   : Fied value is valid.

7. errors   -> Which represents the list of errors of the fields
       required  : True/false
       minlength : true/false
       maxlength : true/false
       pattern   : true/false
       number    : true/false
       email     : true/false
----------------------------------------------------------------------------------------------------------------
##Req: Create the login form which contain the following fields:
1. Username  of type text 
2. Password  of type password
3. One Login Button

#Note : We need to perform the client side / server side validation of authentication.
##Example1:

Step1:Create the login component
```
>ng g c login
```
##login.component.ts
------------------
```
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  flag:boolean=false;
  myForm:FormGroup;
  constructor(){
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
```
##Step2: login.component.html
```
<div class="container">
    <h1>Login Page</h1>
    <form [formGroup]="myForm">
      <label for="username">USERNAME:</label>
      <input type="text" id="username" formControlName="username">
              <!--myFc.username.touched-->
      <div *ngIf="myFc?.['username']?.touched && myFc?.['username']?.invalid">&nbsp;
            <div *ngIf="myForm.get('username')?.errors?.['required']" class="alert alert-danger w-25" role="alert">
                <small>*UserName is required</small>
            </div>
              <!--myFc.errors.required-->
      </div>
      <br/>
      <label for="password">PASSWORD:</label>
      <input type="password" id="password" formControlName="password">

      <div *ngIf="myFc?.['password']?.touched && myFc?.['password']?.invalid">&nbsp;
            <div *ngIf="myForm.get('password')?.errors?.['required']" class="alert alert-danger w-25" role="alert">
                <small>*Password is required</small>
            </div>
              <!--myFc.errors.required-->
      </div>
      <br/>
      <input type="submit" (click)="validation()" class="btn btn-primary">
    </form>
   
    <div *ngIf="flag" class="alert alert-danger w-25 mt-2" role="alert">
        <h6>INVALID USERNAME AND PASSWORD</h6>
    </div>
</div>
```
##Step3: Inside the app.component.html
```
<app-login></app-login>
```
--------------------------------------------------------------------------------------------------------------------
##Example2: We have create the login form with responsive and added some more css to make look and feel better.
##login.component.html
----------------------
```
<div class="container">
    <h1>Login Page</h1>
    <form [formGroup]="myForm">

  <div class="form-group">
    <label for="username">USERNAME:</label>
    <input type="text" class="form-control w-50" id="username" formControlName="username" >
 <div *ngIf="myFc?.['username']?.touched && myFc?.['username']?.invalid">&nbsp;
            <div *ngIf="myForm.get('username')?.errors?.['required']" class="alert alert-danger w-50" role="alert">
                <small class="form-text text-muted">*UserName is required</small>
            </div>
              
</div> 
</div>
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" class="form-control w-50" id="password" formControlName="password">
<div *ngIf="myFc?.['password']?.touched && myFc?.['password']?.invalid">&nbsp;
            <div *ngIf="myForm.get('password')?.errors?.['required']" class="alert alert-danger w-50" role="alert">
                <small class="form-text text-muted">*Password is required</small>
            </div>
              
</div>
    </div>
  
      
     
      <input type="submit" (click)="validation()" class="btn btn-primary">
    </form>
   
    <div *ngIf="flag" class="alert alert-danger w-25 mt-2" role="alert">
        <h6>INVALID USERNAME AND PASSWORD</h6>
    </div>
</div>
```
##login.component.css
-------------------
```
.e1{
    color:red;
    font-size:0.9em;
    
}
small{
    display: inline-block;
}

/* Container styling */
.container {
    max-width: 500px;
    margin: 50px auto;
    padding: 25px;
    background-color: #0c9c9e;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

/* Headings */
h1 {
    text-align: center;
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

hr {
    margin: 20px 0;
}

/* Form labels and inputs */
label {
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
    color: #444;
}

input[type="text"], input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    box-sizing: border-box;
    transition: border-color 0.3s;
}

input:focus {
    border-color: #007bff;
    outline: none;
}

/* Error messages */
.error span {
    color: #ff3d00;
    font-size: 13px;
    font-style: italic;
}

/* Button styling */
button[type="submit"] {
    width: 100%;
    background-color: #007bff;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button[type="submit"]:hover {
    background-color: #0056b3;
}

/* Dynamic message */
h2 {
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
}
```
-------------------------------------------------------------------------------------------------------------- 
#Routing in Angular
----------------------------
#Route
---------------------------------------
- Route basically tells the angular router which view to display when a user clicks a link(hyperlink)
   or a URL into the browser address bar.

- Every Route consistes of following:
             1. Path
             2. Component
       path  ------> component   : Which means which path has to mapped the corresponding component.
- The Router object parses and builds the final URL by using the Route.
##Routes
------
- It is an array of Route objects of your application.
- Where we can configure the corresponding path->component.
##app.routes.ts
--------------
```
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {path:'/home',component:HomeComponent},
  {path:'/service',component:ServiceComponent},
  {path:'/aboutus',component:AboutusComponent},
  {path:'/gallery',component:GalleryComponent},
  {path:'/login',component:LoginComponent}
];
```
##RouterOutlet
------------
- It is directive(<router-outlet) which is basically serves as a placholder , where the Router should 
   be display the view.
##RouterLink
----------
- The RouterLink is a directive which bascially binds the HTML element to a Route.
- When we clicking on the HTML element, which is bound to RouterLink , will bascially result in navigation
   to the Route.
- The RouterLink may contain parameters to be passed to the routes parameter.
```
<ul>
  <li><a routerLink="/home">HOME</a></li>
  <li><a routerLink="/service">SERVICE</a></li>
  <li><a routerLink="/gallery">GALLERY</a></li>
 
</ul>
 
baseURL -> / (base url)

  -It is mapping with path:'' and redirect to /home (HomeComponent)
  -It is mapping with path:'login' and redirect to LoginComponent
----------------------------------------------------------------------------------------------------------
##As of now we have create the following things:

##Step1: Create a new project

```
>ng new ems-app
>cd ems-app
>code .
```

##Step2: Create the following components

```
>ng g c components/home
>ng g c components/service
>ng g c components/aboutus
>ng g c components/gallery
>ng g c components/login
>ng g c components/notfound
```

##Step3: Configure the corresponding path to the component inside the app.routes.ts

```
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'service',component:ServiceComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'login',component:LoginComponent},
   {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'**',component:NotfoundComponent}
];
```

##Step4: Inside the app.component.html we have specifiy the placeholder to view the respective component  template.

I. app.component.ts
--------------------

```
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ems-app';
}
```

##II.app.component.html

```
<h1>AppComponent</h1>

<hr/>

<router-outlet></router-outlet>

```

#Step5: Start the server

```
>npm start
```
#Step6: Perform the unit testing by opening the browser:

```

URLS
----
http://localhost:4200/           -> It will redirect to HomeComponent
http://localhost:4200/home       ->It will redirect to HomeComponent
http://localhost:4200/service    ->It will redirect to ServiceComponent
http://localhost:4200/aboutus    ->It will redirect to AboutusComponent
http://localhost:4200/gallery    ->It will redirect to GalleryComponent
http://localhost:4200/login      ->It will redirect to LoginComponent
http://localhost:4200/login1     ->It will redirect to NotFoundComponent
-----------------------------------------------------------------------------------------------------------

```

##Now we have created the following components(layout):
-----------------------------------------------------

##Step1:

```
>ng g c components/header
>ng g c components/footer
```
#Step2: Inside the header.component.html the following code we have written:
```
 <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">CTS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="#">Home</a>
      <a class="nav-link" routerLink="/service" href="#">Service</a>
      <a class="nav-link" routerLink="/aboutus" href="#">Aboutus</a>
      <a class="nav-link" routerLink="/gallery" href="#">Gallery</a>
      <a class="nav-link" routerLink="/login" href="#">Login</a>
      
    </div>
  </div>
</nav>
```

##Step3: Inside the footer.component.html the following code we have written:

 ```
 <!-- Remove the container if you want to extend the Footer to full width. -->
<div class="container my-5">

  <footer class="text-center text-lg-start" style="background-color: #1abfe8;">
    <div class="container d-flex justify-content-center py-5">
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style="background-color: #54456b;">
        <i class="fa fa-facebook-square"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style="background-color: #54456b;">
        <i class="fa fa-youtube"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style="background-color: #54456b;">
        <i class="fa fa-instagram"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style="background-color: #54456b;">
        <i class="fa fa-twitter"></i>
      </button>
    </div>

    <!-- Copyright -->
    <div class="text-center text-white p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2025 Copyright:
      <a class="text-white" href="https://www.cognizant.com">Cognizant.com</a>
    </div>
    <!-- Copyright -->
  </footer>
  
</div>
<!-- End of .container -->
```

##Step4: We have configure the bootstrap and icons inside the index.html page

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>EmsApp</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
  <app-root></app-root>
<!-- Optional JavaScript; choose one of the two! -->
    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
 
</body>
</html>
```

##Step5:Inside the home.component.html we have create the layout by using bootstrap grid system:

```
<div class="container">
    <!--1st Row Added the HeaderComponent-->
  <div class="row">
    <div class="col-md-12">
      <app-header></app-header>
    </div>
  </div>
  <!--2nd Row : We have added the router-outlent(placeholder) -->
  <div class="row">
    <router-outlet></router-outlet>
  </div>

  <!--3rd Row: We have added the FooterComponent-->
  <div class="row">
    <div class="col-md-12">
      <app-footer></app-footer>
    </div>
  </div>
</div>
```

##Step6: Inside the home.component.ts file

import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';
 @Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
```

##Step7:Inside the app.component.html
```
<app-home></app-home>

```

##Step8: Inside the aboutus.component.html

```
<div class="row">
  <div class="col-md-8 ml-5 mt-4">
    <div class="jumbotron mt-2">
  <h1 class="display-4">About US</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
  </div>
</div>
```
##Step9: Inside the service.component.html
```
<div class="row">
  <div class="col-md-8 ml-5 mt-4">
    <div class="jumbotron mt-2">
  <h1 class="display-4">My Service</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
  </div>
</div>
```

##Step10: Inside the login.component.html (do your own way)

```
 <div class="container">
    <h1>Login Page</h1>
    <form [formGroup]="myForm">

  <div class="form-group">
    <label for="username">USERNAME:</label>
    <input type="text" class="form-control w-50" id="username" formControlName="username" >
 <div *ngIf="myFc?.['username']?.touched && myFc?.['username']?.invalid">&nbsp;
            <div *ngIf="myForm.get('username')?.errors?.['required']" class="alert alert-danger w-50" role="alert">
                <small class="form-text text-muted">*UserName is required</small>
            </div>
              
</div> 
</div>
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" class="form-control w-50" id="password" formControlName="password">
<div *ngIf="myFc?.['password']?.touched && myFc?.['password']?.invalid">&nbsp;
            <div *ngIf="myForm.get('password')?.errors?.['required']" class="alert alert-danger w-50" role="alert">
                <small class="form-text text-muted">*Password is required</small>
            </div>
              
</div>
    </div>
  
      
     
      <input type="submit" (click)="validation()" class="btn btn-primary">
    </form>
   
    <div *ngIf="flag" class="alert alert-danger w-25 mt-2" role="alert">
        <h6>INVALID USERNAME AND PASSWORD</h6>
    </div>
</div>
```

##Step11: Inside the login.component.ts

```
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  flag:boolean=false;
  myForm:FormGroup;
  constructor(){
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
```

##Step12: login.component.css

```
.e1{
    color:red;
    font-size:0.9em;
    
}
small{
    display: inline-block;
}

/* Container styling */
.container {
    max-width: 500px;
    margin: 100px 200px;
    padding: 15px;
    background-color: #0ceef2;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

/* Headings */
h1 {
    text-align: center;
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: underline;
}

hr {
    margin: 20px 0;
}

/* Form labels and inputs */
label {
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
    color: #444;
}

input[type="text"], input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    box-sizing: border-box;
    transition: border-color 0.3s;
}

input:focus {
    border-color: #007bff;
    outline: none;
}

/* Error messages */
.error span {
    color: #ff3d00;
    font-size: 13px;
    font-style: italic;
}

/* Button styling */
button[type="submit"] {
    width: 300px;
    background-color: #007bff;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button[type="submit"]:hover {
    background-color: #107df2;
}

/* Dynamic message */
h2 {
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
}
```

##Step12:Inside the gallery.component.html

```
<div class="container mt-2">
    <h1 style="text-align: center;text-decoration: underline;">GALLERY</h1>
    <div class="row ml-3">
        <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                <img [src]="imageURL1" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
        </div>
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img [src]="imageURL2" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
        </div>
        <div class="col-md-4">
                <div class="card" style="width: 18rem;">
  <img [src]="imageURL3" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
        </div>
    </div>
</div>
```

##Step13:Inside the gallery.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
 imageURL1:string="assets/images/1.png";
 imageURL2:string="assets/images/2.jpg";
 imageURL3:string="assets/images/2.png";

}
```
##Step14: Inside the public->assets->images-> copy the images
##Step15: Start the server
```
>npm start
```
##Step16: Open the browser and type the following url:
  ###http://localhost:4200/
-------------------------------------------------------------------------------------------------------------
 # Angular Service
- What is Service in Angular?
Ans: In Angular, a service is a simple typescript class which  basically contains reusable business logic or data-related code.

- If I am not using the service then if multiple component need a same logic, then the same logic has to repeated in each and every component.
- If we use the service then the repeated code we can write in service and we can use it in every components.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
}



Q1. What is Depedency Injection?
Ans:
- In case of Angular it is one of the design pattern or feature which basically allows you to supply (inject)
  and object's depedencies from the outside, rather than the object creating them itself.
- In short angular creates the object for you and angular manages its lifecyle.

- We need to register the dependency(service) in angular injector.
  -> It means that it happens automatically when you use @Injectable({provideIn:'root'}).

Q2. What is @Injectable in Angular?
Ans:
- It is a decorator that marks a class as available for Dependency Injection.

Q3. What is provideIn:'root' in angular service?
Ans:
- It will tells the angular how and where to provide the service. Here 'root' means the service is available
  globally in the angular application i.e. we can use any where.
- It indicate's that it will creates a single instance.
- And it also say that we no need to configure explicitly inside the app.module.ts inside the providers[] array.

---------------------------------------------------------------------------------------------------------
Step1: Create the db.json file and store the data into  it.
       public -> assets-> db.json
{
    "employees":[
        {"eid":1001,"ename":"RAJU","esalary":30000.00},
        {"eid":1002,"ename":"SUNIL","esalary":40000.00},
        {"eid":1003,"ename":"RAMESH","esalary":60000.00},
        {"eid":1004,"ename":"MAHESH","esalary":80000.00},
        {"eid":1005,"ename":"HANEEF","esalary":70000.00}
    ]
    ,
    "projects":[
        
    ]
}
Step2: Install the json-server
>npm install -g json-server

Step3: Start the json-server
Note : Make sure we need to go to specific location(absolute location to start the server)
>json-server --watch db.json
-> It will show all the ends points
 http://localhost:3000/employees

Step4: Create the employee service
>ng g service employee

Step5: Create the model
>ng g i employee

Step6: Inside the  employee.service.ts the following code

- Before creating the service try to configure the provideHttpClient inside the app.configure.ts
app.configure.ts
----------------
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),      provideRouter(routes),provideHttpClient()]
};

employee.service.ts
----------------------

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 baseURL:string="http://localhost:3000/employees";
 //We have to asked the angular to inject the pre-define service 
 // In order to use this service we need to configure inside the app.configure.ts (provideHttpClient)
 constructor(private http:HttpClient) {}


  //get the all employee data from db.json
  getAllEmployees():Observable<Employee[]>{
      
    return this.http.get<Employee[]>(this.baseURL);  //It is returning the Observable object  
  }
  
}

-------------------------------------------------------------------------------------------------------------
Note: Now we can inject this EmployeeService any where in the angular application(components)

Step7: In order to test we  have used inside the EmployeeComponent

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
 eid?:number;
 ename:string="";
 esalary?:number;
 data:any;
 employees:Employee[]=[];

  // We are asking the angular to create an object for EmployeeService and inject here.
 constructor(private employeeServiceRef:EmployeeService){}
 


 getEmployees():void{
    // invoke the getAllEmployees()
    this.employeeServiceRef.getAllEmployees().subscribe((data)=>{
      
      this.employees=data;
        
    });
}

}

Step8: Now we can present the data inside the employee.component.html

<table>
  <tr>
    <th>EID</th>
    <th>ENAME</th>
    <th>ESALARY</th>

  </tr>

   <tr *ngFor="let employee of employees;">
        <td>{{employee.eid}}</td>
        <td>{{employee.ename}}</td>
        <td>{{employee.esalary}}</td>

   </tr>
</table>
 <hr/>

 










