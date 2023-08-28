import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styles: [
  ]
})
export class StyleComponent {

  value=100;
  changeFn(vaule:string){
    this.value = Number(vaule)
  }

  divStyle={
    height:'200px',
    'background-color':'red'
  }

}
