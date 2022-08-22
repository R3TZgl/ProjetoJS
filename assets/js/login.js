const dataFor = (dataJson) => {
    const login = document.getElementById("login");
    const senha = document.getElementById("senha");


    if(dataJson.email === login.value || dataJson.login === login.value){
        if(dataJson.senha === senha.value){
            setTimeout(function(){
                window.location.href = "../index.html"
            }, 1000);
            console.log("a")
        }else{
            alert("Login ou senha inválidos") // Mudar as cores
        }
    }
}

async function testar_login() {
    await fetch("../json/login.json")
    .then(response => {return response.json()})
    .then(data => {
        let dataJson = data;
        console.log(dataJson);
        dataJson.forEach(dataFor);
        for 
    })
}
