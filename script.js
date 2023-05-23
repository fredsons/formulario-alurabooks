//Abordagem alternativa: utilizar a sintaxe assíncrona/await em vez das Promises encadeadas

// async function consultaCep() {
//   try {
//     const response = await fetch('https://viacep.com.br/ws/01001250/json/');
//     const resultado = await response.json();

//     if (resultado.erro) {
//       throw new Error('Esse CEP não existe');
//     } else {
//       console.log(resultado);
//     }
//   } catch (erro) {
//     console.log(erro);
//   }
// }

// consultaCep();



// let consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
//   .then(dadosDoCEP => dadosDoCEP.json())
//   .then(resultado => {
//     if (resultado.erro) {
//       throw Error('Esse CEP não existe')
//     } else
//       console.log(resultado)
//   })
//   .catch(erro => console.log(erro))
//   .finally(mensagem => console.log('Processo concluido'))


// console.log(consultaCep)

///////////////////////////////////////////////////////////////////////////
// outra abordagem para fazer a mesma coisa de forma modular 

// async function buscaEndereco(cep) {
//   try {
//     const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
//     const consultaConvertida = await consultaCEP.json();

//     if (consultaConvertida.erro) {
//       throw new Error('Esse CEP não existe');
//     }

//     return consultaConvertida;

//   } catch (erro) {
//     throw erro;
//   }
// }

// function atualizarCamposEndereco(consultaConvertida) {
//   const cidade = document.getElementById('cidade');
//   const logradouro = document.getElementById('endereco');
//   const estado = document.getElementById('estado');
//   const bairro = document.getElementById('bairro');
//   const mensagemErro = document.getElementById('erro');

//   if (consultaConvertida) {
//     cidade.value = consultaConvertida.localidade || '';
//     logradouro.value = consultaConvertida.logradouro || '';
//     estado.value = consultaConvertida.uf || '';
//     bairro.value = consultaConvertida.bairro || '';
//     mensagemErro.innerHTML = '';
//   } else {
//     mensagemErro.innerHTML = '<p>CEP inválido</p>';
//   }
// }

// const cep = document.getElementById("cep");
// cep.addEventListener("focusout", async () => {
//   const cepValue = cep.value;
//   try {
//     const consultaConvertida = await buscaEndereco(cepValue);
//     atualizarCamposEndereco(consultaConvertida);
//   } catch (erro) {
//     console.log(erro);
//     atualizarCamposEndereco(null);
//   }
// });

//////////////////////////////////////////////////////////////////////
async function buscaEndereco(cep) {
  var mensagemErro = document.getElementById('erro')
  mensagemErro.innerHTML = "";
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaConvertida = await consultaCEP.json();

    if (consultaConvertida.erro) {
      throw Error('Esse CEP não existe');
    }
    var cidade = document.getElementById('cidade')
    var logradouro = document.getElementById('endereco')
    var estado = document.getElementById('estado')
    var bairro = document.getElementById('bairro')

    cidade.value = consultaConvertida.localidade;
    logradouro.value = consultaConvertida.logradouro;
    estado.value = consultaConvertida.uf;
    bairro.value = consultaConvertida.bairro;

    console.log(consultaConvertida);
    return consultaConvertida;

  } catch (erro) {
    mensagemErro.innerHTML =
      `
      <p>CEP invalido</p>
      `;
    console.log(erro);
  }
}

var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));






