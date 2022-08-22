const headers = new Headers();
headers.append("Accept", "*/*")
headers.append("x-apisports-key", "6af85e3c2c76dfeec16dfae15aa5a121");


var requestOptions = {
	method: "GET",
	headers: headers,
	redirect: "follow" 
};

var anterior = null;

const pesquisa = () => {
  if(document.getElementById("escolha").value !== anterior){
    var endpoint = document.getElementById("escolha").value;
    console.log(`${endpoint}`)
    fetch(`https://v1.basketball.api-sports.io/${endpoint}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      anterior = endpoint;


  }
}

const time = (endpoint) => {
  let dados = document.getElementById("times");
    dados.innerHTML = `
    <h1 id="nomeTime">${endpoint.nome}</h1>
    <img id="imgTime"
      src="${endpoint.logo}"
      width="200px" alt=""></img>`
}
