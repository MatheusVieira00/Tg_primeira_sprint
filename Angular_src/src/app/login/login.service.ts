import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from './login.model';
import { Router, NavigationEnd } from '@angular/router';

interface Representante {
  codigo: number;
  nome: string;
  email: string;
  senha: string;  
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http : HttpClient, private router: Router) {}


  public gravar(obj : LoginModel) : string{    
    let mensagem  = "";
    this.http.post<String>("http://localhost:8090/api/representante", obj).subscribe({
    next: data =>
    {
        mensagem =  "Registro salvo com sucesso !";
    },
    error: error => {
      console.log(error);
      mensagem =  "Ocorreu um erro durante a gravação!";
    }
    });   
    
    return mensagem;
  }

  public alterar(obj: LoginModel): string{
    let mensagem  = "";
    this.http.put<String>("http://localhost:8090/api/representante", obj).subscribe({
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

  public remover(obj: LoginModel) :string{    
    let mensagem  = "";
    this.http.delete<String>("http://localhost:8090/api/representante/"+ obj.codigo).subscribe({
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
  
  
  public carregar(obj: LoginModel){
      this.validarUsuario(obj.email.toString(), obj.senha.toString()).then(
      Representante => {
        if(Representante.codigo>0){
          localStorage.setItem('codigo', Representante.codigo.toString());
          localStorage.setItem('nome', Representante.nome.toString());
          this.router.navigate(['/inicio']);
        }
        else{
          alert("Credenciais inválidas");
        }
      }
    )

  }

async validarUsuario(email: string, senha: string): Promise<Representante> {    
    const url = `http://localhost:8080/api/representante/login`;       
    const dadosUsuario = {
      codigo: "",
      nome: "",
      email: email, 
      senha: senha
    };
 
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosUsuario),
        });
 
        if (response.ok) {
            const data = await response.json();
            // Processa a resposta conforme necessário
            return data; // Exemplo: retorna 1 se a validação for bem-sucedida
        } else {
            console.error('Falha na validação do usuário:', await response.text());
            throw new Error('Erro ao obter usuário');
        }
    } catch (error) {
      alert(error);
        console.error('Erro ao validar usuário:', error);
        throw new Error('Erro ao obter usuário');
    }
}

  public listar() :  Observable<LoginModel[]>{    
      return this.http.get<LoginModel[]>("http://localhost:8090/api/representantes");      
  }
  
}