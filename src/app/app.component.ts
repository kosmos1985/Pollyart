import { Component } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pollyart';
  darkTheme = false;

  eventsSubject: Subject<void> = new Subject<void>();

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    this.eventsSubject.next();
  };
 
}


