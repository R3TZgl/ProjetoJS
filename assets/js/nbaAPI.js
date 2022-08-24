const headers = new Headers();
headers.append("Accept", "*/*")
headers.append("x-apisports-key", "6af85e3c2c76dfeec16dfae15aa5a121");
//6af85e3c2c76dfeec16dfae15aa5a121
//9d147bb57d54eae6f7ef60f63d6eaa89 gustavo

var requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow"
};

var anterior = null;

const pesquisa = () => {
  var select = document.getElementById("escolha").value;
  let endpoint = document.getElementById("inputPesquisa").value;

  console.log(`${select}`)
  fetch(`https://v1.basketball.api-sports.io/${select}?name=${endpoint}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      let info = result.response[0];
      console.log(result);
      if (select === "teams") {
        time(info);
      } else if (select === "leagues") {
        liga(info);
      } else if (select === "countries") {
        pais(info);
      }
    })
    .catch(error => console.log('error', error));
}

const pesquisaSelect = () => {
  if (document.getElementById("escolha").value !== anterior) {
    var select = document.getElementById("escolha").value;

    console.log(`${select}`)
    fetch(`https://v1.basketball.api-sports.io/${select}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        let info = result.response[0];
        console.log(result);
        if (select === "leagues") {
          liga(info);
        } else if (select === "countries") {
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
    <span id=displayNome><h1 id="nomeTime">${info.name}</h1><br>
    <span id="coracaoFav" onclick="favoritos()" class="material-symbols-outlined">favorite</span></span>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <img id="imgTime"
      src="${info.logo}"
      width="200px" alt=""></img>
      <h3 id="paisFooter">${info.country.name}</h3>
      <img id="bandeiraFooter" src="${info.country.flag}" width="25px">`
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
      <img id="bandeiraFooter" src="${info.country.flag}" width="25px">`
}

const pais = (info) => {
  let dados = document.getElementById("times");
  dados.innerHTML = `
 <h1 id="nomeTime">${info.name}</h1>
    <img id="imgTime"
      src="${info.flag}"
      width="250px" alt=""></img>
      <h3 id="paisFooter">${info.code}</h3> `
}


// Paises = flag, name, code
// Ligas = name, type, logo, country
// Times = name, logo, country