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
  colorB = 'green';


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


  redOnClickB():boolean
  {
    this.colorB = 'red';
    return false;
  }

  blueOnClickB():boolean
  {
    this.colorB = 'blue';
    return false;
  }


  greenOnClickB():boolean
  {
    this.colorB = 'green';
    return false;
  }



    icon =
    {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize:
      {
        width: 60,
        height: 60
      }
    };


    iconFire =
    {
      url:'/assets/img/fire.ico',
      scaledSize:
      {
        width: 60,
        height: 60
      }
    };


     triangle: Array<Point> =
  [
    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]


  rect: Array<Point> =
  [
    {lng:9.2, lat:45.6},
    {lng:9.2, lat:45.5},
    {lng:9.1, lat:45.5},
    {lng:9.1, lat:45.6}

  ]

}
