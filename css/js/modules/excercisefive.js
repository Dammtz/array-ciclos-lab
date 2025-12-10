/*
Usa el siguiente arreglo de personas para: 
1. Escribe un comando que imprima a todas las personas en la lista
2. Escribe un comando para eliminar "Dani" en el array. 
3. Escribe un comando para eliminar "Juan" en el array.
4. Escribe un comando para mover a "Luis" al inicio del array.
5. Escribe un comando para agregar "Dam" al final del array.
6. Usando un bucle, recorre el arreglo y despues de imprimir "Maria" sal del array.
7. Escribe un comando para encontrar la posicion de "Maria" en el array e imprimela. 
Al final debe de haber 4 oersonas en el arreglo.
*/ 

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log (people); //1
people.splice (1, 1); //2 
people.splice (2, 1); //3
people.unshift (people.splice (1, 1)[0]); //4
people.push ("Dam"); //5

for (let i = 0; i < people.length; i++) { //6
    console.log (people[i]);
      if (people[i] === "Maria") 
        break;
    };  
let positionMaria = people.indexOf ("Maria"); //7
console.log ("La posicion de Maria en el arreglo es: " + positionMaria);
console.log (people); //Resultado final