import { Component } from '@angular/core';

const OBJ_CLASS={'border-style':true,'show':true};
const ARR_CLASS =['border-style','show']

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: [
      './classes.component.css',
  ]
})
export class ClassesComponent {
    showBorder=true
    multi=OBJ_CLASS

}
