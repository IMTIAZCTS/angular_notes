# Life Cycle Hook Examples :rocket: :open_book:
-------------------------

- Let's learn about OnInit, OnDestory and constructor first

### Step1: Create the following components:
``` ng g c home ```

### Step2: Inside the home.component.ts
```
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy{
 title = '';
  constructor(){
      
     setTimeout(()=>{
      this.title='constructor';
        console.log('--consttructor--');
     },2000);
     
     
  }
  ngOnInit(): void {
    setTimeout(()=>{
      this.title='ngOnInit';
        console.log('--ngOnInit--');
    },3000);
    
  }

  ngOnDestroy(): void {
    setTimeout(()=>{
       this.title='ngOnDestroy';
       console.log('--ngOnDestroy--');
       
    },4000);
   
  }
}

```
### Step3: Inside the home.component.html
```
Title: {{title}}

```
### Step4: Inside the app.component.html
```
 <h1>Welcome to Life-Cycle Hooks Methods..</h1>

 <hr/>
 
  <a routerLink="/about">About</a>

 <hr/>
 <router-outlet></router-outlet>
```
### Step5: Inside the app.routes.ts
```
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent}
];
```
> [!NOTE]
> I am using Home(child) component because destory method will work only if we navigate from one component to another component.
 
-----------------------------------------------------------------------------------------------------------------------------------------------
## 🔄 ngDoCheck()
🧠 What It Does:
ngDoCheck() is called during every change detection run, even if no actual changes occurred. It’s your chance to implement custom change detection logic.

🧪 When to Use:
When Angular’s default change detection doesn’t catch something (like changes to objects or arrays by reference).

When you want to log or react to every change detection cycle

### Let understand with example :

### Step1: Create the new component
```
ng g c docheck
```

### Step2: Inside the docheck.component.ts
```
import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-docheck',
  imports: [CommonModule,FormsModule],
  template: `
    <h2>ngDoCheck Demo</h2>
    <input [(ngModel)]="name" placeholder="Type something..." />
    <p>{{ name }}</p>
  `,
  styleUrl: './docheck.component.css'
})
export class DocheckComponent implements OnInit,DoCheck {
  name:string='';
  constructor(){
    console.log('--Inside the Docheck , constructor is invoked');
    
  }
  ngOnInit(): void {
    console.log('--Docheck ngOnInit--');
    
  }
  ngDoCheck(): void {
    console.log('--Docheck ngDocheck--');
    
  }
}
```
### Step3: Inside the app.component.html
```
 <h1>Welcome to Life-Cycle Hooks Methods..</h1>

 <hr/>
 
  <a routerLink="/about">About</a>&nbsp;
  <a routerLink="/docheck">DoCheck</a>&nbsp;


 <hr/>
 <router-outlet></router-outlet>
```
### Step4: Inside the app.routes.ts
```
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DocheckComponent } from './docheck/docheck.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'docheck',component:DocheckComponent}
];
```
### Output
<img width="954" height="273" alt="image" src="https://github.com/user-attachments/assets/b7c034ec-19eb-48d3-9281-b9f0aa0d089e" />

--------------------------------------------------------------------------------------------------------------------------------------
🧩 ngAfterViewInit()

📌 What It Does:
- This hook is called once after the component’s view (and its child views) has been fully initialized. It’s perfect for interacting with DOM elements or child components that are now available.
🧪 When to Use:
- Accessing @ViewChild or @ViewChildren references.
- Running logic that depends on the view being rendered.
- Initializing third-party libraries that need DOM access.
### Let understand with example :

### Step1: Create the new component
```
ng g c viewinitdemo
```
### Step2: Inside the viewinitdemo.component.ts
```
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewinitidemo',
  imports: [],
  template: `
  <h1 #c>ViewIniti</h1>
  `,
  styleUrl: './viewinitidemo.component.css'
})
export class ViewinitidemoComponent implements AfterViewInit{
 @ViewChild("c")ele!:ElementRef

  constructor(){
    console.log('--ViewInit constructor--');
    
  }
  ngAfterViewInit(): void {
    console.log('--ngAfterViewIniti--');
    setTimeout(()=>{
      this.ele.nativeElement.style.color='red';
    },5000);
  }
}

```
### Step3: Inside the app.component.html
```
 <h1>Welcome to Life-Cycle Hooks Methods..</h1>

 <hr/>
 
  <a routerLink="/about">About</a>&nbsp;
  <a routerLink="/docheck">DoCheck</a>&nbsp;
  <a routerLink="/viewinit">ViewInit</a>&nbsp;
<hr/>
 <router-outlet></router-outlet>
```
### Step4: Inside the app.routes.ts
```
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DocheckComponent } from './docheck/docheck.component';
import { ViewinitidemoComponent } from './viewinitidemo/viewinitidemo.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'docheck',component:DocheckComponent},
    {path:'viewinit',component:ViewinitidemoComponent}
];
```

### Step5: Output
<img width="955" height="269" alt="image" src="https://github.com/user-attachments/assets/cce7ebce-14dd-4b1c-8009-76bce9d1d6a1" />

--------------------------------------------------------------------------------------------------------------------------------------
> [!WARNING]
> If you try to access @ViewChild in ngOnInit, it’ll be undefined. That’s why ngAfterViewInit() is your go-to for DOM manipulation.
----------------------------------------------------------------------------------------------------------------------------------------

🧬 ngAfterContentInit()
📌 What It Does:
- This hook is called once after Angular projects external content into the component’s view using <ng-content>. It’s your chance to interact with that projected content.
🧪 When to Use:
- When your component uses <ng-content> to accept content from its parent.
- To perform logic after that content is initialized (e.g., accessing it via @ContentChild).

### Let's work with Example

### Step1: Create the following components
```
ng g c parent
ng g c child
```
### Step2: Inside the parent.component.ts
```
import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  template:`
    <app-child>
      <p #projectContent>This is project content from parent</p>
    </app-child>
  `,
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}
```
### Step3: Inside the child.component.ts
```
import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <div>
      <h3>Child Component</h3>
       <ng-content></ng-content>
    </div>
  `,
  styleUrl: './child.component.css'
})
export class ChildComponent implements AfterContentInit{
@ContentChild("projectContent") content!:ElementRef;

 constructor(){
  console.log('--AfterContentInit Constructor--');
  
 }
ngAfterContentInit(): void {
  console.log('ngAfterContentInit called');
  if (this.content) {
    this.content.nativeElement.style.color = 'green';
  } else {
    console.warn('No projected content found');
  }
}

}
```
### Interview Question
- Q1: 
🧩 What Is <ng-content>?
- Think of <ng-content> as a placeholder inside your component where you allow other content to be inserted. It’s like saying:
-  “Hey, I don’t know what content you want to put here, but I’ll leave a spot for it.” -
🧠 Why Do We Use It?
- Because it makes components flexible and reusable. Instead of hardcoding everything inside a component, you let the parent decide what content to pass in.

📦 Real-Life Analogy
Imagine you’re designing a gift box component. You don’t know what gift someone wants to put inside, so you leave a space for it:
```
<!-- gift-box.component.html -->
<div class="box">
  <h3>🎁 Gift Box</h3>
  <ng-content></ng-content> <!-- placeholder for the actual gift -->
</div>
```
- Now someone else can use your component like this:

```
<app-gift-box>
  <p>This is a surprise toy!</p>
</app-gift-box>

```
The <p> tag gets inserted right where <ng-content> is. So the final output looks like:
```
<div class="box">
  <h3>🎁 Gift Box</h3>
  <p>This is a surprise toy!</p>
</div>

```

🛠️ When Is It Useful?
- When building layout components like cards, modals, tabs, etc.
- When you want to customize part of a component without rewriting it.
- When you want to project dynamic content from a parent into a child.

🧙 Bonus: You Can Have Multiple Slots
You can even name slots using select:

```
<ng-content select=".header"></ng-content>
<ng-content select=".body"></ng-content>

```
Then use it like:

```
<app-card>
  <div class="header">Title</div>
  <div class="body">Main content</div>
</app-card>

```

### Let take an example of ng-content

### Step1: Create the fancy and use component to understand
```
ng g c fancycard
ng g c use
```

### Step2: Inside the fancycard.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-fancycard',
  imports: [],
  template: `
     <div class="card">
            <div class="card-title">
               <ng-content select="[card-title]"></ng-content>
            </div>
            <div class="card-body">
               <ng-content select="[card-body]"></ng-content>
            </div>
     </div>
  `,
  styles:[`.card{border:1px solid #aaa;padding:10px;background-color:#bbbf;width:100%;height:200px}`]
})
export class FancycardComponent {

}
```
### Step3: Inside the use.component.ts
```
import { Component } from '@angular/core';
import { FancycardComponent } from '../fancycard/fancycard.component';
 
@Component({
  selector: 'app-use',
  imports: [FancycardComponent],
  template: `
  <app-fancycard>
  <h3 card-title>My Custom Title</h3>
  <p card-body>This is the body content.</p>
</app-fancycard>

  `,
  styleUrl: './use.component.css'
})
export class UseComponent {

}
```
### Step4: Inside the app.routes.ts
```
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DocheckComponent } from './docheck/docheck.component';
import { ViewinitidemoComponent } from './viewinitidemo/viewinitidemo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FancycardComponent } from './fancycard/fancycard.component';
import { UseComponent } from './use/use.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'docheck',component:DocheckComponent},
    {path:'viewinit',component:ViewinitidemoComponent},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'fancy',component:FancycardComponent},
    {path:'use',component:UseComponent}
];

```
### Step5: Inside the app.component.html
```
 <h1>Welcome to Life-Cycle Hooks Methods..</h1>

 <hr/>
 
  <a routerLink="/about">About</a>&nbsp;
  <a routerLink="/docheck">DoCheck</a>&nbsp;
  <a routerLink="/viewinit">ViewInit</a>&nbsp;
  <a routerLink="/parent">ParentComponent(AfterContentInit)</a>&nbsp;
  <a routerLink="/child">ChildComponent(AfterContentInit)</a>&nbsp;
  <a routerLink="/fancy">FancyCard(ng-content)</a>&nbsp;
  <a routerLink="/use">UseCard(ng-content)</a>&nbsp;
<hr/>
 <router-outlet></router-outlet>
```
### Step6 : Output
<img width="949" height="284" alt="image" src="https://github.com/user-attachments/assets/7fc6b9fb-67fb-423e-b8c3-cb3f8de8149d" />

---------------------------------------------------------------------------------------------------------------------------------------
🧪 Example 3: Default Content Fallback
- You can also provide default content if nothing is projected.

🧷 DefaultComponent
```
@Component({
  selector: 'app-default',
  template: `
    <div>
      <ng-content></ng-content>
      <p *ngIf="!hasContent">No content provided!</p>
    </div>
  `
})
export class DefaultComponent {
  hasContent = false;

  ngAfterContentInit() {
    this.hasContent = true; // You can use ContentChild to detect actual content
  }
}

```
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🔁 What Is ngAfterContentChecked()?
- This lifecycle hook is called after Angular checks the content projected into a component—and it runs every time change detection happens. That means it’s triggered frequently, so it’s best used with care.

🧠 Think of It Like:
“Hey, Angular just finished checking the projected content. Want to do anything now?”

🧪 Example: Tracking Projected Content Changes
Let’s say you have a CardComponent that receives content via <ng-content>. You want to log a message every time that content is checked.

## Let's take an example to understand it:

### Step1: Create the Card Component 
```
ng g c card
```
### Step2: Inside the card.component.ts
```
import { AfterContentChecked, Component } from '@angular/core';
@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <div class="card">
       <ng-content></ng-content>
    </div>
  `,
  styleUrl: './card.component.css'
})
export class CardComponent implements AfterContentChecked{
  constructor(){
    console.log('--AfterContentCheckd Constructor--');
  }
  ngAfterContentChecked(): void {
      console.log('--ngAfterContentChecked---');
      console.log('-- Projected Content Was Checked--');
       
  }
}

```
### Step3: Inside the use.component.ts

```
import { Component } from '@angular/core';
import { FancycardComponent } from '../fancycard/fancycard.component';
import { CardComponent } from "../card/card.component";
 
@Component({
  selector: 'app-use',
  imports: [CardComponent],
  template: `
  <hr/>
<app-card>
  {{message}}
</app-card>
<hr/>
  `,
  styleUrl: './use.component.css'
})
export class UseComponent {
 message:string='hi';
 constructor(){
  setTimeout(()=>{
    this.message='hello'
  },5500);
 }
}
```
### Step4: Inside the app.routes.ts
```
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DocheckComponent } from './docheck/docheck.component';
import { ViewinitidemoComponent } from './viewinitidemo/viewinitidemo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FancycardComponent } from './fancycard/fancycard.component';
import { UseComponent } from './use/use.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'docheck',component:DocheckComponent},
    {path:'viewinit',component:ViewinitidemoComponent},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'fancy',component:FancycardComponent},
    {path:'use',component:UseComponent},
    {path:'card',component:CardComponent}
];
```
### Step5: Insdie the app.component.html
```
 <h1>Welcome to Life-Cycle Hooks Methods..</h1>

 <hr/>
 
  <a routerLink="/about">About</a>&nbsp;
  <a routerLink="/docheck">DoCheck</a>&nbsp;
  <a routerLink="/viewinit">ViewInit</a>&nbsp;
  <a routerLink="/parent">ParentComponent(AfterContentInit)</a>&nbsp;
  <a routerLink="/child">ChildComponent(AfterContentInit)</a>&nbsp;
  <a routerLink="/fancy">FancyCard(ng-content)</a>&nbsp;
  <a routerLink="/use">UseCard(ng-content)</a>&nbsp;
  <a routerLink="/card">Card(ngAfterContentChecked)</a>&nbsp;
 <hr/>
 <router-outlet></router-outlet>
```
### Step6: Output

<img width="955" height="308" alt="image" src="https://github.com/user-attachments/assets/8135a0a2-b06b-4e3b-a712-ff2fee7c3fda" />

----------------------------------------------------------------------------------------------------------------------------------------------
🔄 Comparison with ngAfterContentInit()
- Hook	When It Runs	Frequency
  - ngAfterContentInit()
      - Once, after content is initialized	One-time
  - ngAfterContentChecked()
      - After every content check cycle	Multiple times

--------------------------------------------------------------------------------------------------------------------------------------------------
## ngAfterViewChecked()
📌 What It Does:
- This hook is called after Angular checks the component’s view and its child views. It runs after every change detection cycle, just like ngAfterContentChecked()—but this one focuses on the view, not the projected content.

🧠 Think of It Like:
- “Angular just finished checking the view. Want to do anything now?”

🧪 Example: Watching View Updates
- Let’s say you want to log every time the view is checked, maybe to track layout changes or debug rendering issues.


## Step1: Create the component i.e.viewcheck
```
ng g c viewcheck
```
### Step2: Inside the viewcheck.component.ts
```
import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-viewcheck',
  imports: [],
  template: `
   <h3 #ms>{{msg}}</h3>
  `,
  styleUrl: './viewcheck.component.css'
})
export class ViewcheckComponent implements AfterViewChecked{
  @ViewChild('ms') msgElement!:ElementRef;
msg:string='Hi';

constructor(){
  console.log('--ngAfterViewChecked Constructor---');
  
}

ngAfterViewChecked(): void {
  console.log('--ngAfterviewChecked---');
  this.msg="Good Evening";
  //We can measure the layout of the component
  const width=this.msgElement.nativeElement.offsetWidth;
  console.log('Width is:',width);
  
}
changeMsg():void{
  this.msg="Hello";
}

}
```
### Step3: Inside the app.component.html
```
 <h1>Welcome to Life-Cycle Hooks Methods..</h1>

 <hr/>
 
  <a routerLink="/about">About</a>&nbsp;
  <a routerLink="/docheck">DoCheck</a>&nbsp;
  <a routerLink="/viewinit">ViewInit</a>&nbsp;
  <a routerLink="/parent">ParentComponent(AfterContentInit)</a>&nbsp;
  <a routerLink="/child">ChildComponent(AfterContentInit)</a>&nbsp;
  <a routerLink="/fancy">FancyCard(ng-content)</a>&nbsp;
  <a routerLink="/use">UseCard(ng-content)</a>&nbsp;
  <a routerLink="/card">Card(ngAfterContentChecked)</a>&nbsp;
  <a routerLink="/viewcheck">ViewCheck(ngAfterViewChecked)</a>&nbsp;
 <hr/>
 <router-outlet></router-outlet>
```
### Step4: Inside the app.routes.ts
```
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DocheckComponent } from './docheck/docheck.component';
import { ViewinitidemoComponent } from './viewinitidemo/viewinitidemo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FancycardComponent } from './fancycard/fancycard.component';
import { UseComponent } from './use/use.component';
import { CardComponent } from './card/card.component';
import { ViewcheckComponent } from './viewcheck/viewcheck.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'docheck',component:DocheckComponent},
    {path:'viewinit',component:ViewinitidemoComponent},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'fancy',component:FancycardComponent},
    {path:'use',component:UseComponent},
    {path:'card',component:CardComponent},
    {path:'viewcheck',component:ViewcheckComponent}
];

```
### Step5: Output

<img width="959" height="406" alt="image" src="https://github.com/user-attachments/assets/35893522-284c-43a4-a66a-b4097adf012a" />


🔄 Comparison with ngAfterViewInit()
- Hook	When It Runs	Frequency
  - ngAfterViewInit()
      - Once, after view is initialized	One-time
  - ngAfterViewChecked()
      - After every view check cycle	Multiple times

⚠️ Use With Care
- Because ngAfterViewChecked() runs often, avoid putting heavy logic inside it. Use it for:
1. Layout measurements
2. Debugging view updates
3. Triggering lightweight UI adjustments
-------------------------------------------------------------------------------------------------------------------------------------------
🔄 ngOnChanges()
📌 What It Does:
- ngOnChanges() is called whenever an @Input() property changes. It runs before ngOnInit() and every time the input value updates.
🧠 Think of It Like:
- “Hey, one of the inputs to this component just changed—do you want to react to it?”

🧪 Example: Reacting to Input Changes
- Let’s say you have a GreetingComponent that receives a name from its parent.

### Step1: Create the component greeting component
```
ng g c greeting
ng g c myparent
```
### Step2: Inside the myparent.component.ts
```
import { Component } from '@angular/core';
import { GreetingComponent } from "../greeting/greeting.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myparent',
  imports: [GreetingComponent,FormsModule],
  template: `
  <app-greeting [name]="username"></app-greeting>
  <input [(ngModel)]="username" placeholder="Enter UserName"/>
  `,
  styleUrl: './myparent.component.css'
})
export class MyparentComponent {
  username:string='';
}
```
### Step3: Inside the greeting.component.ts
```
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-greeting',
  imports: [],
  template: `
   <h2>Hello,{{name}}</h2>
  `,
  styleUrl: './greeting.component.css'
})
export class GreetingComponent implements OnChanges {
 @Input('name') name:string='';

 ngOnChanges(changes: SimpleChanges): void {
     console.log('--ngOnChanges---');
     console.log('-Changes : ',changes);
     
 }
}
```
### Step4: Inside the app.component.html
```
 <h1>Welcome to Life-Cycle Hooks Methods..</h1>

 <hr/>
 
  <a routerLink="/about">About</a>&nbsp;
  <a routerLink="/docheck">DoCheck</a>&nbsp;
  <a routerLink="/viewinit">ViewInit</a>&nbsp;
  <a routerLink="/parent">ParentComponent(AfterContentInit)</a>&nbsp;
  <a routerLink="/child">ChildComponent(AfterContentInit)</a>&nbsp;
  <a routerLink="/fancy">FancyCard(ng-content)</a>&nbsp;
  <a routerLink="/use">UseCard(ng-content)</a>&nbsp;
  <a routerLink="/card">Card(ngAfterContentChecked)</a>&nbsp;
  <a routerLink="/viewcheck">ViewCheck(ngAfterViewChecked)</a>&nbsp;
  <a routerLink="/myparent">NgOnChange(ngOnChange)</a>&nbsp;
 <hr/>
 <router-outlet></router-outlet>
```

### Step5: Inside the app.routes.ts
```
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DocheckComponent } from './docheck/docheck.component';
import { ViewinitidemoComponent } from './viewinitidemo/viewinitidemo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FancycardComponent } from './fancycard/fancycard.component';
import { UseComponent } from './use/use.component';
import { CardComponent } from './card/card.component';
import { ViewcheckComponent } from './viewcheck/viewcheck.component';
import { GreetingComponent } from './greeting/greeting.component';
import { MyparentComponent } from './myparent/myparent.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'docheck',component:DocheckComponent},
    {path:'viewinit',component:ViewinitidemoComponent},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'fancy',component:FancycardComponent},
    {path:'use',component:UseComponent},
    {path:'card',component:CardComponent},
    {path:'viewcheck',component:ViewcheckComponent},
    {path:'greeting',component:GreetingComponent},
    {path:'myparent',component:MyparentComponent}
];

```
### Step5: Output
<img width="959" height="392" alt="image" src="https://github.com/user-attachments/assets/e743c9eb-061b-4ef4-b566-60b4d99f981a" />

✅ When to Use It
To validate or transform input data

To trigger logic based on input changes

To compare old vs new values

-----------------------------------------------------------------------------------------------------------------------------------------------------------
 Each hook plays a specific role:
## Angular Lifecycle Hooks

| Hook                    | When It Runs                               | Purpose                                      |
|-------------------------|--------------------------------------------|----------------------------------------------|
| `ngOnChanges`           | On input property change                   | React to changes in `@Input()` values        |
| `ngOnInit`              | Once after first `ngOnChanges`             | Initialize component                         |
| `ngDoCheck`             | During every change detection cycle        | Custom change detection                      |
| `ngAfterContentInit`    | After content (`ng-content`) is projected  | Respond to content initialization            |
| `ngAfterContentChecked` | After every check of projected content     | Respond to content checks                    |
| `ngAfterViewInit`       | After component's view is initialized      | Access view child elements                   |
| `ngAfterViewChecked`    | After every check of component's view      | Respond to view checks                       |
| `ngOnDestroy`           | Just before component is destroyed         | Cleanup (unsubscribe, clear timers, etc.)    |


--------------------------------------------------------------------------------------------------------------------------------------------------------

### 🌿 Angular Lifecycle Hooks – Interview Questions & Answers

## 🧠 Basic-Level Questions

### 1. What are Angular lifecycle hooks?
Lifecycle hooks are special methods in Angular that allow you to tap into key moments in a component or directive’s life—like creation, updates, and destruction.

---

### 2. How many lifecycle hooks are there in Angular?
There are **eight** main lifecycle hooks:
- `ngOnChanges`
- `ngOnInit`
- `ngDoCheck`
- `ngAfterContentInit`
- `ngAfterContentChecked`
- `ngAfterViewInit`
- `ngAfterViewChecked`
- `ngOnDestroy`

---

### 3. Which lifecycle hook is called first?
`ngOnChanges` is called first—**only if there are `@Input()` properties**. Otherwise, `ngOnInit` is the first hook called.

---

### 4. What is the purpose of `ngOnInit()`?
Used for component initialization—like fetching data, setting up subscriptions, or preparing the UI. It runs once after the first `ngOnChanges`.

---

## 🔍 Intermediate-Level Questions

### 5. What is the difference between `ngOnInit()` and `constructor()`?
- `constructor()` is used for dependency injection and basic setup.
- `ngOnInit()` is used for initialization logic that depends on Angular bindings being ready.

---

### 6. When is `ngOnDestroy()` called and why is it important?
It’s called just before the component is removed from the DOM. It’s crucial for:
- Unsubscribing from Observables
- Clearing timers
- Releasing resources

---

### 7. What does `ngDoCheck()` do?
It allows custom change detection logic. It runs during every change detection cycle, even if Angular doesn’t detect changes.

---

### 8. What is the use of `ngAfterContentInit()` and `ngAfterContentChecked()`?
These hooks deal with projected content (`<ng-content>`):
- `ngAfterContentInit()` runs once after content is projected.
- `ngAfterContentChecked()` runs after every check of that content.

---

### 9. What is the difference between `ngAfterViewInit()` and `ngAfterViewChecked()`?
These hooks deal with the component’s own view:
- `ngAfterViewInit()` runs once after the view is initialized.
- `ngAfterViewChecked()` runs after every view check.

---

### 10. Can you access `@ViewChild` in `ngOnInit()`?
No. `@ViewChild` is only available after the view is initialized—so you must access it in `ngAfterViewInit()`.

---

## 🧪 Advanced-Level Questions

### 11. How does Angular detect changes in `ngOnChanges()`?
Angular compares the new value of `@Input()` properties with the previous value and passes a `SimpleChanges` object to `ngOnChanges()`.

---

### 12. What happens if you mutate an object or array passed via `@Input()`?
Angular may not detect the change unless the reference changes. In such cases, use `ngDoCheck()` for custom detection.

---

### 13. Can lifecycle hooks be used in directives?
Yes! Most lifecycle hooks (like `ngOnInit`, `ngOnDestroy`, `ngDoCheck`) can be used in directives as well.

---

### 14. How would you clean up subscriptions in a component?
Use `ngOnDestroy()` to unsubscribe manually or use `takeUntil()` with a `Subject` that emits on destroy.

---

### 15. What’s the best hook for initializing third-party libraries that need DOM access?
`ngAfterViewInit()`—because the DOM is fully rendered and accessible at that point.

---














