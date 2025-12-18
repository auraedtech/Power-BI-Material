//Función mostrar y ocultar info //

function muestra_oculta(id){
    let div = document.getElementById(id);
    if (div.style.display == "flex"){
        div.style.display = "none";
    }
    else {
        div.style.display ="flex";
    }
}

//Cambio de página
let codigo = "UserWalmart1";

function code(){
    respuesta =document.getElementById("answer").value;
    console.log(respuesta);
    document.getElementById("answer").value = "";
    if(codigo==respuesta){
        location.href = "main.html"
    } else {
        document.getElementById("verifica").innerHTML = "Inténtalo nuevamente"
        document.getElementById("verifica").style.color = "red";
    }
}
