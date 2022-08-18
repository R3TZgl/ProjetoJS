const headers = new Headers();
headeres.append("x-apisports-key", "6af85e3c2c76dfeec16dfae15aa5a121")
headers.append("x-apisports-host", "v1.basketball.api-sports.io")

var requestOptions = {
	method: "GET",
	headers: headers,
	redirect: "follow" 
};

let endpoint = document.getElementById("inputPesquisa");
console.log(`${endpoint}`)

fetch(`https://v1.basketball.api-sports.io/${endpoint}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



