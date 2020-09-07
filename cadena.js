function adjustText(cadena, longitud){
    let analisiscadena = cadena.split("");
    var valor = []; 

    for(i =0 ; i < longitud ; i++){

        if (analisiscadena.length > i){
            valor[i] =  analisiscadena[i];

        }else{
            valor[i] = " ";
        }
             
        
    }
    
    return valor.join('');


    
        
  }

  console.log(adjustText("hola", 3));