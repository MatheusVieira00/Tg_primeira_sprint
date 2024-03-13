import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroModel } from './cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  constructor(private http : HttpClient) {}


  public gravar(obj : CadastroModel) : string{    

    var mensagem  = "Ocorreu um erro durante a gravação!";
    this.http.post<String>("http://localhost:8080/api/representante", obj).subscribe({
    next: data =>
    {
        mensagem =  "Registro salvo com sucesso!";
    },
    error: error => {
      console.log(error);
      mensagem =  "Ocorreu um erro durante a gravação!";
    }   
    });    
    return mensagem;
  }

  public alterar(obj: CadastroModel): string{
    let mensagem  = "";
    this.http.put<String>("http://localhost:8080/api/representante", obj).subscribe({
    next: data =>
    {
      mensagem =  "Registro alterado com sucesso !";
    },
    error: error => {
      console.log(error);
      mensagem =  "Ocorreu um erro durante a gravação!";
    }
    });    
    return mensagem;
  } 

  public remover(obj: CadastroModel) :string{    
    let mensagem  = "";
    this.http.delete<String>("http://localhost:8080/api/representante/"+ obj.codigo).subscribe({
      next: data =>
      {
        mensagem =  "Registro removido com sucesso !";
      },
      error: error => {
        console.log(error);
        mensagem =  "Ocorreu um erro durante a gravação!";
      }
    });    
    return mensagem;   
  } 
  
  
  public carregar(codigo: Number): Observable<CadastroModel>{
    return this.http.get<CadastroModel>("http://localhost:8080/api/representante/"+codigo);         
  }

  public listar() :  Observable<CadastroModel[]>{    
      return this.http.get<CadastroModel[]>("http://localhost:8080/api/representantes");      
  }
  
}