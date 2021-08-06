import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  implements OnInit, OnDestroy{

  field_data = 
    {
      name: 'Enter your name...',
      email: 'Enter your email...',
      tel: 'Enter your phone...',
      message: 'Enter your message...',
    };
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  darkTheme = false;

  private eventsSubscription: Subscription;

  @Input() events: Observable<void>;

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe(() => this.setDark());
    
  };
  setDark() {
    this.darkTheme = !this.darkTheme
  };
 
   sendData(formRef) {
    alert('Thank you for your message');
    console.log(formRef.value); 
  };
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  };

}
