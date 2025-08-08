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
-> In case of two-ways binding it is combination of the "property binding" and "Event Binding".

Syntax:
-------
 <tag [(ngModel)]="property"></tag>

-> Here ngModel is a pre-define directive which help to enable the two-ways binding.

Note: ngModel we cannot use directly inside the template until unware we have to import the
       Pre-Define Module i.e. FormsModule
            -> Before Angular 14 we suppose the configure the FormsModule inside the app.module.ts
              but since from angular 15 we can configure inside the components itself by using
              standalone:true

-> When you change the value of property , the same will be automatically updated in the HTML element.
-> When we change the value of HTML element, the same will be automatically  updated in the  property.
-> Two-ways binding is applicable only for <input> and <select> tag.
-> "FormsModule" must be imported in order to use the two-ways binding.

Example:
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

Directives
-----------
-> Directives are classes that add additional behavior to elements in your Angular applications.
-> The following are the categories of directives:

1. Build-In Directives

  a. Component -> In order to declare the compoent with decorator @Component({meta-data})
  b. Attribute -> It will focus on appearance of the elements, the following are the different attributes directives:
                  I. ngClass
                  II.ngStyle
                  III.ngModel : To achieve the two-ways communication
 style
--------
-> It is used to set the css property value dynamically(i.e. runtime).
-> When the value of the component property is changed, the value of css property will be automatically gets changed.

Syntax
------
<tag [style.cssProperty]="componentPropertyName"></tag>
Example:

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
Step2: app.component.html
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
<tag [ngClass]="component.property"></tag>


Example
--------
Step1: app.component.css

.class1{
    color:green;
}

.class2{
    color:red;
}


Step2:app.component.ts
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
Step3:app.component.html
 ```
 <button (click)="onChange($event)">Action</button>
 <hr/>
 Message: <h2 [ngClass]="mycolor">{{msg}}</h2>
```
III. ngStyle

- Difference between ngClass and ngStyle
--------------------------------------------------------------------------------------------------------------------
c. Structural


-------------------------------------------------------------------------------------------------------------------

2. User-Define Directives











