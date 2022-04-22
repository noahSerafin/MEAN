import {Component} from '@angular/core'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponnent {
  enteredContent = '';
  enteredTitle = '';
  newPost = 'no content';

  OnAddPost() {
    this.newPost = this.enteredValue;
  }
}
