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

    if(endpoint !== ""){
      var url = `https://v1.basketball.api-sports.io/${select}?name=${endpoint}`;
    }else{
      var url = `https://v1.basketball.api-sports.io/${select}`;
    }

    console.log(`${select}`)
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        let info = result.response[0];
        console.log(result);
        if(select === "teams"){
          time(info);
        }else if(select === "leagues"){
          liga(info);
        }else if(select === "countries"){
          pais(info);
        }
      })
      .catch(error => console.log('error', error));
      anterior = select;


  }
}

const time = (info) => {
  let dados = document.getElementById("times");
    dados.innerHTML = `
    <h1 id="nomeTime">${info.name}</h1>
    <img id="imgTime"
      src="${info.logo}"
      width="200px" alt=""></img>
      <h3 id="paisFooter">${info.country.name}</h3>
      <img id="bandeiraFooter" src="${info.country.flag}" width="25px"> `
}

const liga = (info) => {
  let dados = document.getElementById("times");
    dados.innerHTML = `
    <h1 id="nomeTime">${info.name}</h1>
    <h3>${info.type}</h3>
    <img id="imgTime"
      src="${info.logo}"
      width="200px" alt=""></img>
      <h3 id="paisFooter">${info.country.name}</h3>
      <img id="bandeiraFooter" src="${info.country.flag}" width="25px"> `
}

const pais = (info) => {
  let dados = document.getElementById("times");
    dados.innerHTML = `
    <h1 id="nomeTime">${info.name}</h1>
    <img id="imgTime"
      src="${info.flag}"
      width="200px" alt=""></img>
      <h3 id="paisFooter">${info.code}</h3>`
}



// Paises = flag, name, code
// Ligas = name, type, logo, country
// Times = name, logo, country