import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'; //importa questa libreria
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDboLgrV5gG9_BRDnT1Wsvl1JLogo6Uy4c'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
