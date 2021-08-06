import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.component.html',
  styleUrls: ['./lawyers.component.scss']
})
export class LawyersComponent implements OnInit {
  darkTheme = false;

  private eventsSubscription: Subscription;

  @Input() events: Observable<void>;
  constructor() { }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe(() => this.setDark());
  }
  setDark() {
    this.darkTheme = !this.darkTheme   
  };
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  };
}

