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





