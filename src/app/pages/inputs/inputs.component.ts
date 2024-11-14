import { Component } from '@angular/core';
import {InputAntigoComponent} from "../../shared/components/input/input-antigo/input-antigo.component";
import {InputSignalComponent} from "../../shared/components/input/input-signal/input-signal.component";
import {HostLearningComponent} from "../../shared/components/host-learning/host-learning.component";

@Component({
  selector: 'inputs',
  standalone: true,
  imports: [InputAntigoComponent, InputSignalComponent, HostLearningComponent],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  inputAntigoLabel = 'Input Antigo';
  inputSignalLabel = 'Input Signal';

  imprimeValor(valor: string){
    console.log({valor});
  }
}
