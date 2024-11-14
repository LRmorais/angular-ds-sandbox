import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject, takeUntil} from "rxjs";

interface User{
  id: string;
  username: string;
}

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent implements OnInit, OnDestroy {
  private httpClient = inject(HttpClient);
  protected users: User[] = [];

  private unsub$ = new Subject<void>();

  ngOnInit() {
    this.httpClient.get<User[]>('http://localhost:3000/users')
      .pipe(takeUntil(this.unsub$))
      .subscribe(users => {
        console.log(users)
        this.users = users;
      });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}
