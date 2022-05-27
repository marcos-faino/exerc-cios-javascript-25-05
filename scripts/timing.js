cont = 1;
let cores = setInterval(function(){
    let container = document.getElementById("corpo");
    let c1 = Math.floor(Math.random()*255);
    let c2 = Math.floor(Math.random()*255);
    let c3 = Math.floor(Math.random()*255);    
    container.style.backgroundColor = "rgb("+c1+","+c2+","+c3+")";

    imgFilhotinhos.src = "imagens/filhote"+cont + ".jpg";
    cont === 4 ? cont=0 : cont++;
    console.log(cont);
}, 2000);

setTimeout(function(){
    alert("Bem Vindo!\nO show já vai começar!");
}, 1000);


btCor.onclick = function(){
    clearInterval(cores);
}

