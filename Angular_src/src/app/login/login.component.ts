import { Component } from '@angular/core';
import { LoginModel } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public mensagem : string = "";
  public model : LoginModel = new LoginModel();
  public lista: LoginModel[] = [];
  
  constructor(private service: LoginService) {
    this.listar();
  }

  public gravar(){
    this.service.gravar(this.model);
    this.mensagem = "registro inserido com sucesso!";    
  }
  public alterar(){
    this.service.alterar(this.model);
    this.mensagem = "registro alterado com sucesso!"
  }
  public remover(){
    this.service.remover(this.model);
    this.mensagem = "registro removido com sucesso!";
  }
  public carregar(){
    this.mensagem = "";
    this.service.carregar(this.model);
     
  }
  public listar(){
    this.service.listar().subscribe(
      (data: LoginModel[]) => {            
        this.lista = data;      
      } , 
      (error) => {
        this.mensagem = "ocorreu um erro no carregamento da listagem !"+ error;
      }
    )       
  }

  

  }

