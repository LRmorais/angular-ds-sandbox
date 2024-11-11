import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { MenuUsuarioComponent } from "./components/menu-usuario/menu-usuario.component";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MenuUsuarioComponent
],
})
export class DefaultLayoutComponent {}
