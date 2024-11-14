import {Component, inject} from '@angular/core';
import {SubscribeComponent} from "./subscribe/subscribe.component";
import {HttpClient} from "@angular/common/http";
import {AsyncPipe} from "@angular/common";

interface User{
  id: string;
  username: string;
}

@Component({
  selector: 'app-pipe-async-learning',
  standalone: true,
  imports: [SubscribeComponent, AsyncPipe],
  templateUrl: './pipe-async-learning.component.html',
  styleUrl: './pipe-async-learning.component.scss'
})
export class PipeAsyncLearningComponent {
  private httpClient = inject(HttpClient);
  protected users$ = this.httpClient.get<User[]>('http://localhost:3000/users');
}
