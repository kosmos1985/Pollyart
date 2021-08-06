import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit,OnDestroy {
  darkTheme = false;

  private eventsSubscription: Subscription;

  @Input() events: Observable<void>;
  constructor() { }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe(() => this.setDark());
  };
  setDark() {
    this.darkTheme = !this.darkTheme
  };
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  };

}






