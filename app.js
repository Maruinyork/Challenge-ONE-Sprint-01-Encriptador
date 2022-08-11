

//Capturo los elementos de HTML
var botonEncriptar= document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var resultado = document.querySelector("#texto-resultado");

botonEncriptar.addEventListener('click', ()=>{
   ocultar();
   resultado.textContent = encriptarTexto(recuperarTexto());
   document.getElementById("copy").style.display = "show";
   document.getElementById("copy").style.display = "inherit";
})

botonDesencriptar.addEventListener('click', ()=>{
    ocultar();
    resultado.textContent = desencriptarTexto(recuperarTexto());
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
 })

const recuperarTexto = (area)=>{
    var area = document.querySelector("#area");
    return area.value.toLowerCase();
}

const ocultar= ()=>{
    document.querySelector(".contenedor-munieco").style.display = "none";
    document.querySelector (".contenedor-h3").style.display = "none";
    document.querySelector(".contenedor-parrafo").style.display = "none";
}

const encriptarTexto = (mensaje) =>{
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
      if(texto[i] ==="a"){
        textoFinal= textoFinal + "ai"
      }
      else if(texto[i] ==="e"){
        textoFinal= textoFinal + "enter"
      }
      else if(texto[i] ==="i"){
        textoFinal= textoFinal + "imes"
      }
      else if(texto[i] ==="o"){
        textoFinal= textoFinal + "ober"
      }
      else if(texto[i] ==="u"){
        textoFinal= textoFinal + "ufat"
      }
      else{
        textoFinal = textoFinal + texto[i];
      }
    }
    return textoFinal;
}

const desencriptarTexto = (mensaje) =>{ //Ahora tiene que saltearse las letras que agrego
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
      if(texto[i] ==="a"){
        textoFinal= textoFinal + "a"
        i = i+1; //Le agrego una iteracion para que se saltee la i de la palabra ai
      }
      else if(texto[i] ==="e"){
        textoFinal= textoFinal + "e"
        i = i+4; //Le agrego una iteracion para que se saltee nter de la palabra Enter
      }
      else if(texto[i] ==="i"){
        textoFinal= textoFinal + "i"
        i = i+3; //Le agrego una iteracion para que se saltee mes de la palabra aimes
      }
      else if(texto[i] ==="o"){
        textoFinal= textoFinal + "o"
        i = i+3; //Le agrego una iteracion para que se saltee ber  de la palabra ober
      }
      else if(texto[i] ==="u"){
        textoFinal= textoFinal + "u"
        i = i+3; //Le agrego una iteracion para que se saltee fat de la palabra ufat
      }
      else{
        textoFinal = textoFinal + texto[i];
      }
    }
    return textoFinal;
}

function copy() {
  var contenido = document.querySelector("#texto-resultado");
  navigator.clipboard.writeText(contenido.innerHTML);
  Swal.fire(
    'Se copio!',
  )
}
