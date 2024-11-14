import {booleanAttribute, Component, input} from '@angular/core';

@Component({
  selector: 'app-host-learning',
  standalone: true,
  imports: [],
  host: {
    '[class.green]': 'isPrimary()',
  },
  template: `
    <label>Escreva aqui</label>
    <input type="text" />
  `,
  styleUrl: './host-learning.component.scss'
})
export class HostLearningComponent {
  isPrimary = input(false, {
    transform: booleanAttribute,
  });
}
