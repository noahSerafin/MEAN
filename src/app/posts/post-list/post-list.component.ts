import {Component, OnDestroy, OnInit} from '@angular/core'
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponnent implements OnInit, OnDestroy {
  //posts = [
  //  {title: 'First Post', content: "this is the first post content"},
  //  {title: 'Second Post', content: "this is the second post content"},
  //  {title: 'third Post', content: "this is the third post content"}
  //];
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
