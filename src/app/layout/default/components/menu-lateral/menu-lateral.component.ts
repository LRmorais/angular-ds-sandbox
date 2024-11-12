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

    public salvarRascunhoEtapa04(    eventos: DadosEventoCargoForm[],    lotacoes: DadosLotacaoForm[]  ): Observable<unknown> {    const formDataEventosCargos = new FormData();    const formDataLotacoes = new FormData();    eventos.forEach((eventoCargo, index) => {      if (eventos) {        formDataEventosCargos.append(          `eventos[${index}].linhaFuncional`,          eventoCargo.linhaFuncional?.toString() || ''        );        formDataEventosCargos.append(          `eventos[${index}].idCargo`,          eventoCargo.cargo.id.toString() || ''        );        formDataEventosCargos.append(          `eventos[${index}].idVinculo`,          eventoCargo.tipoVinculo.id.toString() || ''        );        formDataEventosCargos.append(          `eventos[${index}].dataInicio`,          this.formataData(eventoCargo.dataInicioVigencia as Date) || ''        );        formDataEventosCargos.append(          `eventos[${index}].dataFim`,          this.formataData(eventoCargo.dataFimVigencia as Date) || ''        );        formDataEventosCargos.append(          `eventos[${index}].idAtoAdministrativo`,          eventoCargo.ato.numeroAdministrativo?.toString() || ''        );        formDataEventosCargos.append(          `eventos[${index}].idMotivo`,          eventoCargo.motivoAto.id?.toString() || ''        );        formDataEventosCargos.append(          `eventos[${index}].numeroDoe`,          eventoCargo.numeroDoe?.toString() || ''        );        formDataEventosCargos.append(          `eventos[${index}].dataDoe`,          this.formataData(eventoCargo.dataPublicacaoDoe as Date) || ''        );        formDataEventosCargos.append(          `eventos[${index}].idOrgao`,          eventoCargo.orgaoDestino.id.toString() || ''        );        formDataEventosCargos.append(`eventos[${index}].idColaborador`, '27');        eventoCargo.arquivos?.forEach(arquivo => {          arquivo?.file &&            formDataEventosCargos.append(              `eventos[${index}].arquivos`,              arquivo.file            );        });      }    });    lotacoes.forEach((lotacao, index) => {      if (lotacoes) {        formDataLotacoes.append(          `lotacoes[${index}].linhaFuncional`,          lotacao.linhaFuncional?.toString() || ''        );        formDataLotacoes.append(          `lotacoes[${index}].idSetor`,          lotacao.lotacao.id.toString() || ''        );        formDataLotacoes.append(          `lotacoes[${index}].idSublotacao`,          lotacao.subLotacao.id.toString() || ''        );        formDataLotacoes.append(          `lotacoes[${index}].dataInicio`,          this.formataData(lotacao.dataInicioVigencia as Date) || ''        );        formDataLotacoes.append(          `lotacoes[${index}].dataFim`,          this.formataData(lotacao.dataFimVigencia as Date) || ''        );        formDataLotacoes.append(          `lotacoes[${index}].idAtoAdministrativo`,          lotacao.ato.numeroAdministrativo?.toString() || ''        );        formDataLotacoes.append(          `lotacoes[${index}].idMotivo`,          lotacao.motivoAto.id?.toString() || ''        );        formDataLotacoes.append(          `lotacoes[${index}].numeroDoe`,          lotacao.numeroDoe?.toString() || ''        );        formDataLotacoes.append(          `lotacoes[${index}].dataDoe`,          this.formataData(lotacao.dataPublicacaoDoe as Date) || ''        );        formDataLotacoes.append(`lotacoes[${index}].idColaborador`, '27');        lotacao.arquivos?.forEach(arquivo => {          arquivo?.file &&            formDataLotacoes.append(              `lotacoes[${index}].arquivos`,              arquivo.file            );        });      }    });    const eventosCargosRequest = this.http      .post(        `${this._ambiente}${this._sgpHistoricoFuncionalPath}/eventos-cargo/rascunho`,        formDataEventosCargos      )      .pipe(        catchError(error => throwError(() => ({ error, source: 'eventos' })))      );    const lotacoesRequest = this.http      .post(        `${this._ambiente}${this._sgpHistoricoFuncionalPath}/lotacao/rascunho`,        formDataLotacoes      )      .pipe(        catchError(error => throwError(() => ({ error, source: 'lotacoes' })))      );    return forkJoin([eventosCargosRequest, lotacoesRequest]).pipe(      map(responses => ({        eventos: responses[0],        lotacoes: responses[1],      })),      catchError(error => {        return throwError(          () => new Error(`Erro na requisição de ${error.source}`)        );      })    );  } 
}
