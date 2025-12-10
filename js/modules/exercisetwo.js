// Escribe una funcion que reciba un arreglo de numeros y duplique el valor en el arreglo 
//Imprimir el nuevo arreglo actualizado.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const duplicateValues = (numbers) => {
    return numbers.map(num => num * 2);
}; 

//console.log (duplicateValues(numbers));

export { duplicateValues };