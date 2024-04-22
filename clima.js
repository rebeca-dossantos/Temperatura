let chave = "17a038cef59e604f9b71c064f447d60b"

function colocarnatela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/"+ dados.weather[0].icon +".png"
    document.querySelector(".umi").innerHTML = "Umidade: " + dados.main.humidity + "%"
}


async function buscarcidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=17a038cef59e604f9b71c064f447d60b&units=metric").then(resposta => resposta.json())
    console.log(dados)
    colocarnatela(dados)
}

function clique() {
    let cidade = document.querySelector(".nome").value

    buscarcidade(cidade)
}

