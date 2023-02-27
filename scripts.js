// VÁRIAVEIS => Um espaço da memória do computador que guardamos algo (um número, uma letra, um texto, uma imagem)
// FUNÇÃO => Um trecho de código que só é executado quando chamado.

let chave = "5e682c768bc216a231f583ef6608119d"


function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".tmax").innerHTML = "Máx " + (Math.floor(dados.main.temp_max)) + "°C"
    document.querySelector(".tmin").innerHTML = "Min " + (Math.floor(dados.main.temp_min)) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" + 
    "&units=metric"
    ) 
    .then(resposta => resposta.json())
    
    colocarNaTela(dados)
}


function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}