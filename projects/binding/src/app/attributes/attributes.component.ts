import { Component } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styles: [
  ]
})
export class AttributesComponent {

  two=2;
  three=3

  protected readonly oncanplay = oncanplay;
}
