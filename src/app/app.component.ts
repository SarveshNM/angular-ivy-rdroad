import { Component, VERSION } from '@angular/core';
import { formatDate } from '@angular/common';
import { timer,Observable, Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  today: number = Date.now();

  
ngOnInit(): void {
    
}
    
  
  

}
