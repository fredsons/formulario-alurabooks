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



let consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
  .then(dadosDoCEP => dadosDoCEP.json())
  .then(resultado => {
    if (resultado.erro) {
      throw Error('Esse CEP não existe')
    } else
      console.log(resultado)
  })
  .catch(erro => console.log(erro))
  .finally(mensagem => console.log('Processo concluido'))


console.log(consultaCep)


