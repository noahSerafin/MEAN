import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl:  './header.component.html'
})

export class HeaderComponent {
  enteredValue = '';
  newPost = 'no content';

  OnAddPost() {
    this.newPost = this.enteredValue;
  }
}
