import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit,OnDestroy {

  darkTheme = false;

  private eventsSubscription: Subscription;

  @Input() events: Observable<void>;

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe(() => this.setDark());
    
  };
  setDark() {
    this.darkTheme = !this.darkTheme 
  };

  public scrollToAbout(): void {
    window.scrollTo({ left: 0, top: 500, behavior: 'smooth' });
  };
  public scrollToPractis(): void {
    window.scrollTo({ left: 0, top: 1100, behavior: 'smooth' });
  };
  public scrollToLawyers(): void {
    window.scrollTo({ left: 0, top: 1600, behavior: 'smooth' });
  };
  public scrollToPublications(): void {
    window.scrollTo({ left: 0, top: 2800, behavior: 'smooth' });
  };
  public scrollToFaq(): void {
    window.scrollTo({ left: 0, top: 3550, behavior: 'smooth' });
  };
  public scrollToContact(): void {
    window.scrollTo({ left: 0, top: 4400, behavior: 'smooth' });
  };
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  };
}
