var btnSumar= document.getElementById("btnSumar");

btnSumar.addEventListener("click", function(e){
    e.preventDefault();    
    resolver("sumar");
});

var btnRestar = document.getElementById("btnRestar");

btnRestar.addEventListener("click", function(e){
    e.preventDefault();
    resolver("restar");
});

var btnMultiplicar = document.getElementById("btnMultiplicar");

btnMultiplicar.addEventListener("click", function(e){
    e.preventDefault();
    resolver("multiplicar");
});

var btnDividir = document.getElementById("btnDividir");

btnDividir.addEventListener("click", function(e){
    e.preventDefault();
    resolver("dividir");
});

var btnPotencia = document.getElementById("btnPotencia");
btnPotencia.addEventListener("click", function(e){
    e.preventDefault();    
    resolver("potencia");
});

var btnRaiz = document.getElementById("btnRaiz");
btnRaiz.addEventListener("click", function(e){
    e.preventDefault();    
    resolver("raiz");
});

var btnfecha= document.getElementById("btnfecha");
btnfecha.addEventListener("click", function(e){
    e.preventDefault();    
    resolver("calculoFecha");
});


var btneliminar= document.getElementById("btneliminar");
btneliminar.addEventListener("click", function(e){
    e.preventDefault();    
  eliminar() 
});

function eliminar(limpiar) {
  document.getElementById('fechaUno').value = "";
   
   document.getElementById('fechaDos').value = "";
  
  document.getElementById('uno').value = "";

document.getElementById('dos').value = "";

document.getElementById('resultado').textContent="";

}


    function resolver(operacion){

    var uno = parseInt( document.getElementById("uno").value);
    var dos = parseInt( document.getElementById("dos").value);

    var fechaUno = new Date (document.getElementById("fechaUno").value);
    var fechaDos = new Date(document.getElementById("fechaDos").value);
    var miliSegundosDia=  24 * 60 * 60 * 1000;
    var milisegundosTranscurridos= Math.abs(fechaUno.getTime() - fechaDos.getTime());

    

    switch(operacion){
        case "sumar":
          var resultado =uno + dos;
            break;
         case "restar":
          var resultado =uno - dos;
            break;
         case "dividir":
          var resultado =uno / dos;
            break;
        case "multiplicar":
         var resultado =uno * dos;
            brea
            case "potencia":
          var  resultado = Math.pow(uno, dos);
            break;
            case "raiz":
         var   resultado = Math.pow(uno, 1/dos);
            break;
        case "calculoFecha":
          var  resultado = Math.round (milisegundosTranscurridos/miliSegundosDia);
            break;
        case "eliminar":
        var resultado= " ";
        break;

    }

    document.getElementById("resultado").textContent = resultado;
    
}





