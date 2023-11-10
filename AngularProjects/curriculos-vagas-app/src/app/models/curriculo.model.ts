export class Curriculo {
  //atributos
  id: number = 0;
  nome: string = '';
  foto: string = '';
  experiencia: string = '';
  contato: number = 0;

  //construtor
  constructor (
    id: number,
        nome: string,
        foto: string,
        experiencia: string,
        contato: number
    ) {
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.experiencia = experiencia;
        this.contato = contato;
    }
}
