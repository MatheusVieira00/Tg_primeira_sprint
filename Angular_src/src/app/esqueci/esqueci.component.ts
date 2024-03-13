import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-esqueci',
  templateUrl: './esqueci.component.html',
  styleUrls: ['./esqueci.component.css']
})
export class EsqueciComponent {
  email: string = '';

  constructor(private http : HttpClient) {}


  async sendEmail() {
    var valido = false; 
    var mensagem = "Erro:";
    var Senha = "";    

      const email = this.email;
      const url = `http://localhost:8080/api/email/${email}`;        
      
      try {
        const response = await this.http.get(url).toPromise() as any;        
        if (response[0].senha !=="") {
          Senha = response[0].senha;
        } else {
          mensagem += "\nO email não está cadastrado no banco de dados!";
        }
      } catch (error) {
        console.error(error);
        mensagem += "\nO email não está cadastrado no banco de dados!";
      }
      
      if(mensagem==="Erro:"){
        valido = true;
      }
    
      if(valido)
      {
        const emailData = {
          to: this.email, // Usando o valor fornecido na tela
          subject: 'Recuperação de senha',
          body: 'A senha que foi gravada no sistema é: ' + Senha + '\n\n\n\nAtenciosamente, \nEquipe do Volta para Casa. \n\n\nEste e-mail é automatico, favor não responder'
        };

        this.http.post<String>("http://localhost:8080/Email/enviar-email", emailData).subscribe({
        next: data =>
        {
            alert("Email enviado com sucesso!");
        }    
        }); 
        alert("Email enviado com sucesso!");

      }
      else
      {
        alert(mensagem);
      }
    
  }

}
