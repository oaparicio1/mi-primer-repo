function factorial(numero){
    var res=1;
    var fact;

    if(numero > 0){
      for (i=1; i <= numero; i++){

        
            res = res*i;
            fact = res;

       
       
      }
      
    }else{
        fact = 1;
    }
    return fact;
}
    console.log(factorial(0));