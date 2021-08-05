import { Component } from '@angular/core';
// import { ViewportScroller } from '@angular/common';

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
  public scroll($element): void {
    // 
     
      console.log($element);
      $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    
  };
}
