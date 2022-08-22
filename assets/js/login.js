const dataFor = (dataJson) => {
    const login = document.getElementById("login");
    const senha = document.getElementById("senha");


    if(dataJson.email === login.value || dataJson.login === login.value){
        if(dataJson.senha === senha.value){
            setTimeout(function(){
                window.location.href = "../index.html"
            }, 2000);
            document.getElementById('login').style.border = "2px solid black";
            document.getElementById('senha').style.border = "2px solid black";
        }else{
            document.getElementById('login').style.border = "2px solid red";
            document.getElementById('senha').style.border = "2px solid red";
            alert("Login ou senha inválidos")
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
    })
}