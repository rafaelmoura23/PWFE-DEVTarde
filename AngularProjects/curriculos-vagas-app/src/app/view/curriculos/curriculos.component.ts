// Importa os módulos e classes necessárias
import { Component, OnInit } from '@angular/core';
import { CurriculoService } from 'src/app/service/curriculos.service';
import { Curriculo } from 'src/app/models/curriculo.model';
@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.css'],
})
export class CurrciculosComponent implements OnInit {
  public curriculos: Curriculo[] = []; // Uma matriz para armazenar as vagas
  constructor(private _curriculosService: CurriculoService) {}
  // Injeta o serviço de vagas no construtor do componente
  ngOnInit(): void {
    this.listarCurriculos();
    // Executa a função de listagem de vagas quando é inicializado
  }
  // Função para listar as vagas
  listarCurriculos() {
    this._curriculosService.getCurriculos().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((item) => {
        // Mapeia os dados retornados para o modelo Vaga
        return new Curriculo(
          item.id,
          item.nome,
          item.foto,
          item.experiencia,
          item.contato,
        );
      });
    });
  }
}
