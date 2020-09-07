const carro = {
    "modelo": "2020",
     "marca": "Mazda",
     "cilindraje": "1.6",
      "placa": "CXN500",
      conductores: {
          "nombre1": "Omar",
          "nombre2": "Aparicio"
      }


}

for(let llave in carro){
    console.log(carro[llave]);
}
/*
console.log(carro);
console.log(carro.modelo);
console.log(carro.marca);
console.log(carro.placa);
console.log(carro.conductores.nombre1);*/