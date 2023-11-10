// Importa os módulos e classes necessárias
import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculos.service';
@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.css'],
})
export class PainelCurriculosComponent implements OnInit {
  public curriculo:Curriculo = new Curriculo(0, '', '', '', 0);
  // Uma instância de 'Vaga' para rastrear os dados do formulário
  public curriculos: Curriculo[] = [];
  // Uma matriz para armazenar as vagas listadas
  constructor(private _curriculosService: CurriculoService) {}
  // aplica o serviço 'VagaService' no construtor
  ngOnInit(): void {
    this.listarCurriculos();
    // Quando o componente é inicializado, lista as vagas disponíveis
  }
  listarCurriculos() {
    // Lista as vagas do servidor usando o serviço 'VagaService'
    this._curriculosService.getCurriculos().subscribe((retornaCurriculos) => {
      this.curriculos = retornaCurriculos.map((item) => {
        // Mapeia os dados retornados para objetos 'Vaga'
        return new Curriculo(
          item.id,
          item.nome,
          item.foto,
          item.experiencia,
          item.contato
        );
      });
    });
  }
  listarCurriculo(curriculo: Curriculo) {
    // Função para listar uma vaga individual no formulário para edição
    this.curriculo = curriculo;
    // A vaga clicada é definida como a vaga atual no formulário
  }
  cadastrar() {
    // Função para cadastrar uma nova vaga
    this._curriculosService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        // Após cadastrar com sucesso
        this.curriculo = new Curriculo(0, '', '', '', 0); // Limpa o formulário
        this.listarCurriculos(); // Atualiza a lista de vagas
      },
      (err) => {
        console.log('Erro ao cadastrar', err);
        // Em caso de erro, exibe uma mensagem no console
      }
    );
  }
  atualizar(id: number) {
    // Função para atualizar uma vaga existente
    this._curriculosService.atualizarCurriculo(id, this.curriculo).subscribe(
      () => {
        // Após atualizar com sucesso
        this.curriculo = new Curriculo(0, '', '', '', 0); // Limpa o formulário
        this.listarCurriculos(); // Atualiza a lista de vagas
      },
      (err) => {
        console.log('Erro ao atualizar', err);
      }
    );
  }
  excluir(id: number) {
    // Função para excluir uma vaga
    this._curriculosService.removerCurriculo(id).subscribe(
      () => {
        // Após excluir com sucesso
        this.curriculo = new Curriculo(0, '', '', '', 0); // Limpa o formulário
        this.listarCurriculos(); // Atualiza a lista de vagas
      },
      (err) => {
        console.log('Erro ao excluir', err);
      }
    );
  }
}
