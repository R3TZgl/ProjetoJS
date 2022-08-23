const dataFor = (dataJson) => {
    const login = document.getElementById("login");
    const senha = document.getElementById("senha");


    if (dataJson.email === login.value || dataJson.login === login.value) {
        if (dataJson.senha === senha.value) {
            setTimeout(function () {
                window.location.href = "../index.html"
            }, 1000);
            document.getElementById('Erro').innerText = ""
            document.getElementById('login').style.border = "2px solid black";
            document.getElementById('senha').style.border = "2px solid black";
            document.getElementById('Erro').style.backgroundColor = "transparent";
        } else {
            document.getElementById('Erro').innerText = "Dados de login e/ou senha estão incorretos"
            document.getElementById('login').style.border = "2px solid red";
            document.getElementById('Erro').style.backgroundColor = "white";
            document.getElementById('senha').style.border = "2px solid red";
        }
    }
}

async function testar_login() {
    await fetch("../json/login.json")
        .then(response => { return response.json() })
        .then(data => {
            let dataJson = data;
            console.log(dataJson);
            dataJson.forEach(dataFor);
        })
}