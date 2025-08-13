import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
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
