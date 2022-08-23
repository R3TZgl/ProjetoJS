const headers = new Headers();
headers.append("Accept", "*/*")
headers.append("x-apisports-key", "9d147bb57d54eae6f7ef60f63d6eaa89");


var requestOptions = {
	method: "GET",
	headers: headers,
	redirect: "follow" 
};

var anterior = null;

const pesquisa = () => {
  if(document.getElementById("escolha").value !== anterior){
    var select = document.getElementById("escolha").value;
    let endpoint = document.getElementById("inputPesquisa").value;
    console.log(`${select}`)
    fetch(`https://v1.basketball.api-sports.io/${select}?name=${endpoint}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        let info = result.response[0];
        time(info)
      })
      .catch(error => console.log('error', error));
      anterior = select;


  }
}

const time = (info) => {
  let dados = document.getElementById("times");
  console.log(info)
    dados.innerHTML = `
    <h1 id="nomeTime">${info.name}</h1>
    <img id="imgTime"
      src="${info.logo}"
      width="200px" alt=""></img>`
}



// Paises = flag, name, code
// Ligas = name, type, logo, country
// Times = name, logo, country