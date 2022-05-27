//Primeira Forma de resolver
function verMaior(){
    try{
        let num1Int = parseInt(num1.value);
        let num2Int = parseInt(num2.value);
        let num3Int = parseInt(num3.value);
        if(num1Int > num2Int && num1Int> num3Int){
            maior.innerHTML = "O 1º Número é maior - " + num1Int;
        }else if(num2Int > num1Int && num2Int> num3Int){
            maior.innerHTML = "O 2º Número é maior - " + num2Int;
        }else if(num3Int > num1Int && num3Int> num2Int){
            maior.innerHTML = "O 3º Número é maior - " + num3Int;
        }else{
            maior.innerHTML = "Os números são iguais!"
        }
    }catch(error){
        console.log(error.message)
    } 
}

botao.onclick = verMaior;

//Segunda Forma de resolver
/*
botao.onclick = function(){
    let inputNumeros = document.getElementsByClassName("numeros");
    let vetorNumeros = Object.values(inputNumeros);
    let maiorNum = vetorNumeros[0].value;
    let pos = 1;
    for(let i = 1; i<vetorNumeros.length; i++){
        if(vetorNumeros[i].value > maiorNum){
            maiorNum = vetorNumeros[i].value;
            pos = i+1;
        }
    }
    maior.innerHTML = "O maior número é o "+ pos + "º número:" + maiorNum; 
}
*/