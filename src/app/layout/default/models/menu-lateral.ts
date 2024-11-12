export interface MenuLateral {
  label: string;
  icon?: string;
  route?: string;
  children?: MenuLateral[];
}
