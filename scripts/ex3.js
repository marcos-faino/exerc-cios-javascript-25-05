texto.onkeyup = function(event){
    if(event.keyCode === 13){
        alert("Enter pressionado");
    }
    this.value = this.value.toUpperCase();
    caracteres.innerHTML = this.value.length;
}