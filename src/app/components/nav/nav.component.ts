import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  {

  // constructor(private viewportScroller: ViewportScroller) {}
  // public onClick(elementId: string): void { 
  //   this.viewportScroller.scrollToAnchor(elementId);
  // }
  public scrollToAbout(): void {
    window.scrollTo({ left: 0, top: 700, behavior: 'smooth' });
  };
  public scrollToPractis(): void {
    window.scrollTo({ left: 0, top: 1300, behavior: 'smooth' });
  };
  public scrollToLawyers(): void {
    window.scrollTo({ left: 0, top: 1800, behavior: 'smooth' });
  };
  public scrollToPublications(): void {
    window.scrollTo({ left: 0, top: 3000, behavior: 'smooth' });
  };
  public scrollToFaq(): void {
    window.scrollTo({ left: 0, top: 3700, behavior: 'smooth' });
  };
  public scrollToContact(): void {
    window.scrollTo({ left: 0, top: 4400, behavior: 'smooth' });
  };
}
