import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styles: [
  ]
})
export class InterpolationComponent {

  //With parts
  //properties(Bindings, Variables)
  title:string ="Text Interpolation";
  //Getter

  person={
    first:"Zaw",
    last:"Min Lwin"
  }

  get personName(){
    return `${this.person.first}${this.person.last}`
  }
  //Method wiht Return Types
  sayHello(name:string){
    return `Hello ${name}`
  }
  //data Types
  date = new Date;
  //Number
  data = Number.MAX_VALUE


}
