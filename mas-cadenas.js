const datos = "Luis, Omar, Aparicio, 36";
const arreglo = datos.split(",");
console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);
console.log(arreglo[3]);

console.log(arreglo.length);
console.log(arreglo[1].length);


const nombre = ["Omar", "Aparicio"].join(" ");
console.log(nombre);
//Convertir a minuscula
console.log(nombre.toLowerCase());
//convertir a mayuscula
console.log(nombre.toUpperCase());
//empieza con
console.log("Omar Aparicio".startsWith("O"));
//temina con
console.log("Omar Aparicio".endsWith("z"));


//substring (subcadena)

console.log("Omar Aparicio".substr(3));

const nombre_completo = "Omar Aparicio";
const iniciales = nombre_completo.split(" ");
console.log(`Las iniciales son: ${iniciales[0].substr(0,1)}.${iniciales[1].substr(0,1)}.`);

//replace 
console.log("Hola mundo".replace("mundo","Jesus"));
console.log("Hola mundo".includes("H"));
console.log("Hola mundo".includes("h"));

/*entrada:
Hola mundo
Salida:
g n k z l t m c n */

const cadvalores = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var encriptar = cadvalores.split(",");
console.log(encriptar);


const palabraDigitada = "Hola Mundo";
const fraseunida = palabraDigitada.split("");
console.log(fraseunida);


var resultado = [];
var posicion = 0;
for (let i = 0; i < fraseunida.length; i++){
    
    console.log(fraseunida[i]);
    //posicion = fraseunida[i];
   // for(let j=0; j < encriptar.length; j++){
    if(i > 1){
        posicion=i-1;

    }else{
        posicion = 1;
    }
    
    }
   
}
