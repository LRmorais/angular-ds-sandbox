import {Component, input} from '@angular/core';

@Component({
  selector: 'input-signal',
  standalone: true,
  imports: [],
  templateUrl: './input-signal.component.html',
  styleUrl: './input-signal.component.scss'
})
export class InputSignalComponent {
 label = input.required<string>();

 botaoDesativado = input(false, {
   transform: (valor: string | boolean) =>
      typeof valor === 'string' ? valor === '' || valor === 'true' : valor
 });
}
