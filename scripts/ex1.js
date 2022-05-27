
texto.onchange = function(){
    if(isNaN(this.value)){
        cubo.innerHTML = "Insira apenas números!";
    }else{
        num = parseInt(this.value);
        cubo.innerHTML = Math.pow(num, 3);
    }
}

/*
function aocubo(cxtexto){
    if(isNaN(cxtexto.value)){
        cubo.innerHTML = "Insira apenas números!";
    }else{
        num = parseInt(cxtexto.value);
        cubo.innerHTML = Math.pow(num, 3);
    }
}
*/