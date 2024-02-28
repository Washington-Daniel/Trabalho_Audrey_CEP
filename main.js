const url = 'https://viacep.com.br/ws/' // Url da API

const cepinformado = document.querySelector('#cep') // Selecionei o input do cep

const botaobuscar = document.querySelector('#btn') // Selecionei o botão de pesquisar

const finalurl = '/json/' // Uma vareavel para armazanar o restante, do valor da url api utilizada

botaobuscar.addEventListener('click',teste) // Adicionei um ouvinte ao click na tecla de pesquisar o cep 

const resultado = document.querySelector('#mostrarcont') // Selecionando a div, que ira renderizar o resultado na tela


function teste(event){

    event.preventDefault();

    document.querySelector('#mostrarcont').style.display = 'block'


    const valorcep = cepinformado.value   // Criando uma variavel para armazenar o valor do cep

    axios.get(url + valorcep + finalurl)
    .then(response => {

        if(response.data.complemento == ""){
            response.data.complemento = "O CEP informado, não possui complemento"
        }

        console.log(response.data)

        console.log( url + cepinformado.value + finalurl)

        resultado.innerHTML = " CEP Informado: " + response.data.cep + "</br>Estado: " + response.data.uf + "</br>Cidade: " + response.data.localidade 
        + "</br>Bairro: " + response.data.bairro + "</br>Rua: " + response.data.logradouro + "</br>Complemento: " + response.data.complemento +  "</br>DDD da Cidade: " + response.data.ddd 

    })
    .catch(error => {

        console.log(error)

        console.log(cepinformado.value)
    }
    )    
}




