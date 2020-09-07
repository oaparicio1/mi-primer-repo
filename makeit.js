function fizzBuzz(numero){
    let retorna;
    if( numero%3 === 0 && numero%5 === 0 ){
       
        retorna = "fizzbuzz";
    }else{
      if( numero%5 === 0 ){
       retorna = "buzz";
        } else{
    if( numero%3 === 0 ){
      retorna = "fizz";
        }else{
            retorna = numero;
    }
  }
  }

  return(retorna);
}

console.log(fizzBuzz(15));