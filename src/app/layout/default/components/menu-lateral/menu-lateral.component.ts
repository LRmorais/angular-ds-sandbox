import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MenuLateral } from '../../models/menu-lateral';
import { ItemsMenu } from '../../../navigation/navigation-tree';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ],
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent {
  public itensMenu = ItemsMenu;

  openedSubmenus: Set<string> = new Set<string>();

  toggleSubMenu(item: MenuLateral) {
    if (this.openedSubmenus.has(item.label)) {
      this.openedSubmenus.delete(item.label);
    } else {
      this.openedSubmenus.add(item.label);
    }
  }

  isSubmenuOpen(item: MenuLateral): boolean {
    return this.openedSubmenus.has(item.label);
  }
}
