import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'input-antigo',
  standalone: true,
  imports: [],
  templateUrl: './input-antigo.component.html',
  styleUrl: './input-antigo.component.scss'
})
export class InputAntigoComponent {
  @Input({required: true}) label = '';

  @Input({ transform: (valor: string | boolean) =>
  typeof valor === 'string' ? valor === '' || valor === 'true' : valor })
  botaoDesativado = false;

  @Output()
  botaoClicado = new EventEmitter<string>();
}
