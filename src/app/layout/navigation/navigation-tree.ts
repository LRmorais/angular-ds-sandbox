import { MenuLateral } from '../default/models/menu-lateral';

export const ItemsMenu: MenuLateral[] = [
  {
    label: 'Listar Usuarios',
    icon: 'group',
    route: 'usuario/lista',
  },
  {
    label: 'Componentes',
    icon: 'settings',
    children: [
      { label: 'Inputs', route: '/inputs' },
    ],
  },
];
