import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
 
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

 constructor(private routeRef:Router){}

  logout():void{
     localStorage.removeItem('username');
     this.routeRef.navigate(['/'])
  }
}
