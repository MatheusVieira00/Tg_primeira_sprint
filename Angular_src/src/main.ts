import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*Validador Login
var reg1 = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/);
var reg2 = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)

  function validarCampos(){

    if(!reg2.test(email.value)){
      alert("Informe um email válido");
      email.focus();
      return false;
    }
    if(!reg1.test(senha.value)){
      alert("Senha inválida. Cheque a senha");
      senha.focus();
      return false;
    }
    else{
      return true;
    }


  }

  function validarCamposR(){
    
    if(!reg2.test(emailR.value)){
      alert("Informe um email válido");
      emailR.focus();
      return false;
    }
    if(!reg1.test(senhaR1.value||senhaR2.value)){
      alert("Senha inválida. Cheque a senha!");
      return false;
    }
    if(senhaR1.value!=senhaR2.value){
      alert("Senhas não coincidem!");
      return false;
    }
    else{
      return true;
    }
  }

/*  JavaScript para busca de produtos
      $(document).ready(function(){
          $("#campo-busca").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $(".card").filter(function() {
                  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
          });
      });

/*Validação do campo email
    var reg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
  
        function validarCampo(){
          if(!reg.test(email.value)){
            alert("Informe um email válido!");
          }
        }

/*Validação do nome, email, comentarios
        function validar() {
          const nome = document.getElementById('nome').value;
          const email = document.getElementById('email').value;
          const comentario = document.getElementById('comentario').value;
          const regexNome = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
          const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          var palavrasOfensivas = ['porra', 'viado', 'caralho', 'bosta','merda', 'cuzão', 'arrombado', 'babaca', 'baitola', 'buceta', 'desgraçado', 'macaco', 'password', '12345678','8675309','[a-z]{8,}', 'qwerty', '1=1','script','window.location',' or ', 'lixo', 'redpill', 'monkey','[0-9]{4,5}-[0-9]{4}', 'nigga', 'mongol', 'system.out', 'system.in'];
          //const regexComentario = /\b(porra|viado|caralho)\b/gi; 
          if (!regexNome.test(nome)) {
            alert("Por favor, insira um nome válido.");
            return false;
          }
          if (!regexEmail.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return false;
          }
          
          /*for (let i = 0; i < palavrasOfensivas.length; i++) {
            const regex = new RegExp("\\b" + palavrasOfensivas[i] + "\\b", "gi");
            if (comentario.match(regex)) {
              alert("Por favor, não utilize palavras ofensivas no campo de comentário.");
              return false;
            }
              return true;
          }
        }
          var re = new RegExp(palavrasOfensivas.join("|"), "i");
          if(re.test(comentario.value)){
            alert("Por favor, não insira palavras ofensivas.");
            comentario.value = "";
            comentario.focus();
          }	
        }


/*Validação da página de pagamento
// Função para validar nome
function validateNome() {
  const nomeInput = document.getElementById("nome");
  const nome = nomeInput.value.trim();

  if (nome === "") {
    alert("Por favor, preencha o campo nome.");
    nomeInput.focus();
    return false;
  }
  
  return true;
}

// Função para validar e-mail
function validateEmail() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, preencha o campo e-mail com um endereço válido.");
    emailInput.focus();
    return false;
  }

  return true;
}

// Função para validar endereço
function validateEndereco() {
  const enderecoInput = document.getElementById("endereco");
  const endereco = enderecoInput.value.trim();

  if (endereco === "") {
    alert("Por favor, preencha o campo endereço.");
    enderecoInput.focus();
    return false;
  }

  return true;
}

// Função para validar cidade
function validateCidade() {
  const cidadeInput = document.getElementById("cidade");
  const cidade = cidadeInput.value.trim();

  if (cidade === "") {
    alert("Por favor, preencha o campo cidade.");
    cidadeInput.focus();
    return false;
  }

  return true;
}

// Função para validar estado
function validateEstado() {
  const EstadoInput = document.getElementById("estado");
  const estado = EstadoInput.value.trim();

if (estado === "") {
  alert("Por favor, preencha o campo estado.");
  EstadoInput.focus();
  return false;
  }

return true;
}


// Função para validar CEP
function validateCEP() {
  const cepInput = document.getElementById("cep");
  const cep = cepInput.value.trim();

  const cepRegex = /^\d{5}-\d{3}$/;
  if (!cepRegex.test(cep)) {
    alert("Por favor, preencha o campo CEP com um valor válido (ex: 12345-678).");
    cepInput.focus();
    return false;
  }

  return true;
}

// Função para validar todos os campos
function validateForm() {
  if (!validateNome()) {
    return false;
  }

  if (!validateEmail()) {
    return false;
  }

  if (!validateEndereco()) {
    return false;
  }

  if (!validateCidade()) {
    return false;
  }

  if (!validateEstado()) {
    return false;
  }

  if (!validateCEP()) {
    return false;
  }

  // Se todos os campos estiverem preenchidos corretamente, a função retorna true
  return true;
}*/
