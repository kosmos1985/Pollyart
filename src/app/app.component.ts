import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pollyart';
  
  darkTheme = false;

  toggleTheme() {
    this.darkTheme = !this.darkTheme
  };
 
}


