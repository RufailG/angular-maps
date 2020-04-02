import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-maps';


  lat = 45.506738;
  lng = 9.190766;

  lat2 = 45.511250;
  lng2 = 9.176744;

  color = 'red';


  redOnClick():boolean
  {
    this.color = 'red';
    return false;
  }

  blueOnClick():boolean
  {
    this.color = 'blue';
    return false;
  }


  greenOnClick():boolean
  {
    this.color = 'green';
    return false;
  }

}
