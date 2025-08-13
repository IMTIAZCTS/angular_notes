import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { UpdateemployeeComponent } from './components/updateemployee/updateemployee.component';
 
export const routes: Routes = [
    //Configure the Main Component
    {path:'',component:MainComponent,children:[
        //we can configure all the child components of Main Component
        {path:'home',component:HomeComponent},
        {path:'service',component:ServiceComponent},
        {path:'aboutus',component:AboutusComponent},
        {path:'gallery',component:GalleryComponent},
        {path:'login',component:LoginComponent},
        
        ]
    },
    //Dashboard component
    {path:'dashboard',component:DashboardComponent,children:[
        {path:'employees',component:EmployeesComponent},
        {path:'addemployee',component:AddemployeeComponent},
        {path:'updateemployee/:eid',component:UpdateemployeeComponent}
    ]}
];
