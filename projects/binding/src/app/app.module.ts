import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { UserWidgetComponent } from './properties/user-widget/user-widget.component';
import { AttributesComponent } from './attributes/attributes.component';
import { ClassesComponent } from './classes/classes.component';
import { StyleComponent } from './style/style.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { MyInputComponent } from './two-way/my-input/my-input.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertiesComponent,
    UserWidgetComponent,
    AttributesComponent,
    ClassesComponent,
    StyleComponent,
    TwoWayComponent,
    MyInputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'two-way',
        component:TwoWayComponent
      },
      {
        path:'style',
        component:StyleComponent
      },
      {
        path:'clas',
        component:ClassesComponent
      },
      {
        path:'attr',
        component:AttributesComponent
      },
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
