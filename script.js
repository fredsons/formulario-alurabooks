let consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
  .then(dadosDoCEP => dadosDoCEP.json())
  .then(resultado => {
    if (resultado.erro) {
      throw Error('Esse CEP não existe')
    } else
      console.log(resultado)
  })
  .catch(erro => console.log(erro));


console.log(consultaCep)

