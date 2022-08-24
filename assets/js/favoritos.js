let position = 7;

const favoritos = () => {
    const nome = document.getElementById("nomeTime").textContent;
    const logo = document.getElementById("imgTime").src;
    var status = null;
    
    fetch("../json/favoritos.json")
    .then(response => response.json())
    .then(result => {
        for(var procura of result){
            console.log(procura);
            if(procura.name == nome){
                status = procura.status;
            }
        }
            console.log(result)
            console.log(procura);
            trueOrFalse(status);

            if(status){
                function remover(chave, valor){
                    result = result.filter(function(jsonObject){
                        return jsonObject[chave] != valor;
                    });
                    return result;
                }                 
                console.log(result)
                procura.status = false;

            }else{
                position = result.length;
                result[position] = {name: `${nome}`, logo: `${logo}`, favorite: true};
                                            
                console.log(result)
                console.log("adicionou")
                procura.status = true;  
            }
})}   




const trueOrFalse = (status) => {
    let coracao = document.getElementById('coracaoFav');
    if(status){
        coracao.style = `
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
        color: rgb(255, 0, 0);`;
    }else{
        coracao.style = `
            font-variation-settings:
            'FILL' 1,
            'wght' 500,
            'GRAD' 0,
            'opsz' 40;
            color: red;
                }`
        console.log('teste');
    }  
}
