import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'ahorcado';
  palavra = 'PROGRAMMING';
  palavraOculta = '';
  tentativas = 0;
  ganhei = false;
  perdi = false;
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'X', 'W', 'Y', 'Z', '-'];
  errors = '';

  constructor() {
    this.palavraOculta = '_ '.repeat(this.palavra.length);
  }

  comprovar(letra: string) {
    this.existeLetra(letra);
    const palavraOcultaArr = this.palavraOculta.split(' ');

    for (let i = 0; i < this.palavra.length; i++) {
      if (this.palavra[i] == letra) {
        palavraOcultaArr[i] = letra;
      }
    }

    this.palavraOculta = palavraOcultaArr.join(' ');
    this.verificaGanhei();
  }

  existeLetra(letra: string) {
    if (this.palavra.indexOf(letra) < 0) {
      if (this.errors.indexOf(letra) >= 0) return;

      this.tentativas++;
      this.errors += letra + ', ';
    }
  }

  verificaGanhei() {
    const palavraArr = this.palavraOculta.split(' ');
    const palavraAval = palavraArr.join('');

    if (palavraAval == this.palavra) {
      this.ganhei = true;
    }

    if (this.tentativas >= 9) {
      this.perdi = true;
    }
  }
}
