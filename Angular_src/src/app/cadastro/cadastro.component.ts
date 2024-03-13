import { Component } from '@angular/core';
import { CadastroModel } from './cadastro.model';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  public mensagem : string = "";
  public model : CadastroModel = new CadastroModel();
  public lista: CadastroModel[] = [];
  
  constructor(private service: CadastroService) {
    this.listar();
  }

  public gravar(){
    this.service.gravar(this.model);
    this.mensagem = "Registro inserido com sucesso!";    
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
    this.service.carregar(this.model.codigo).subscribe(
      (data: CadastroModel) => {            
        this.model.codigo = data.codigo;
        this.model.nome = data.nome;
        this.model.email = data.email;
        this.model.senha = data.senha;
        if(this.model.nome==null){
          this.mensagem = "Registro não encontrado!";
        }
      } , 
      (error) => {
        this.mensagem = "ocorreu um erro no carregamento!"+ error;
      }
    )       

  }
  public listar(){
    this.service.listar().subscribe(
      (data: CadastroModel[]) => {            
        this.lista = data;      
      } , 
      (error) => {
        this.mensagem = "ocorreu um erro no carregamento da listagem !"+ error;
      }
    )       
  }

  

  }

