import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Component, input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-usuario',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
  ],
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent implements OnInit, OnDestroy {
  public showAvatar = input(false);

  constructor(private _router: Router) {}

  get username(): string | null {
    throw new Error('Method not implemented.');
  }

  get profile(): string | null {
    throw new Error('Method not implemented.');
  }

  public ngOnInit(): void {
    console.log('MenuUsuarioComponent montado');
  }

  public ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  signOut(): void {
    throw new Error('Method not implemented.');
  }
}
