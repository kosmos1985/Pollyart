import { Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {

  field_data = 
    {
      name: 'Enter your name...',
      email: 'Enter your email...',
      tel: 'Enter your phone...',
      message: 'Enter your message...',
    };
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  sendData(formRef) {
    alert('Thank you for your message');
    console.log(formRef.value); 
  };
 

}
