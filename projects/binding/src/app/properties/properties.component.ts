import { Component } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styles: [
  ]
})
export class PropertiesComponent {
  status:boolean = false;

  title="User Detail";
  viewCode =1;


  aung:User={
    name:'aung aung',
      email:'aung@gmail.com',
      phone:'099999788'
  }

}
