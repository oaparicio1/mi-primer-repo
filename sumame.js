function promediame(arreglo){
    let prom=0;
   
    if(arreglo.length > 0){
    for(i=0; i < arreglo.length; i++){
      prom =  (prom + arreglo[i]);
    }
    prom= prom/arreglo.length;
    }else{
      prom=0;
    }
    return prom;
  }

  console.log(promediame([1,2,3,4]));