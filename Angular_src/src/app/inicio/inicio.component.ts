import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  nomeUsuario: string = ''; // Variável para armazenar o nome do usuário
  IdUsuario: string = ''; // Variável para armazenar o email do usuário
  ngOnInit(){
    const usuario = localStorage.getItem('nome');
    if(usuario !== null){
      this.nomeUsuario = usuario;
    }
    const codigo = localStorage.getItem('codigo');
    if(codigo !== null){
      this.IdUsuario = codigo;
    }
  }

}
