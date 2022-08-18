const headers = new Headers();
headers.append("Accept", "*/*")
headers.append("x-apisports-key", "6af85e3c2c76dfeec16dfae15aa5a121");


var requestOptions = {
	method: "GET",
	headers: headers,
	redirect: "follow" 
};


const pesquisa = () => {
  let endpoint = document.getElementById("inputPesquisa");
  console.log(`${endpoint.value}`)
  fetch(`https://v1.basketball.api-sports.io/${endpoint.value}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}





