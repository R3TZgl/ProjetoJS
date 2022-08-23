let position = 0;

const favoritos = () => {
    const nome = document.getElementById("nomeTime").value;
    const logo = document.getElementById("imgTime").src;

    fetch("../json/favoritos.json")
    .then(response => response.json())
    .then(result => {
        result[0].nome = "sim";
        console.log(result)
        result[position] = {name: `${nome}`, logo: `${logo}`};
        position += 1;
})
}
