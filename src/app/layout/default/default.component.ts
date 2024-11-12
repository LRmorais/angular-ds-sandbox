import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { MenuUsuarioComponent } from "./components/menu-usuario/menu-usuario.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MenuLateralComponent } from "./components/menu-lateral/menu-lateral.component";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MenuUsuarioComponent,
    MatSidenavModule,
    MatMenuModule,
    RouterModule,
    MenuLateralComponent
],
})
export class DefaultLayoutComponent {}
