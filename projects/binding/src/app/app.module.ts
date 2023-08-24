import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'inter',component:InterpolationComponent
      },
      {
        path:'props',component:PropertiesComponent
      },
      {
        path:'',redirectTo:'/inter',pathMatch:'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
