import {Component, Input} from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-widget',
  templateUrl: './user-widget.component.html',
  styles: [
  ]
})
export class UserWidgetComponent {

//@Input('data')=> type
  @Input()
  user?:User

    @Input()
    title?:string;

}
