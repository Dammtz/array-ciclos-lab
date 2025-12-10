//Escribe un programa que calcule suma y producto de un arreglo de numeros. Imprimir ambos. 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7]; 

/* Forma larga y diferente de hacer el ejercicio. 
const suma = numbers.reduce((acc, curr) => acc + curr, 0);

console.log ("La suma de los numeros es: " + "CH" + suma); 

const producto = numbers.reduce((acc, curr) => acc * curr, 1);

console.log ("El producto de los numeros es: " + producto);
*/ 

const calculateSumAndProduct = (numbers) => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const product = numbers.reduce((acc, curr) => acc * curr, 1);
    return "La suma de los numeros es:" + "CH" + sum + " y " + "El producto de los numeros es: " + product;
}; 

console.log (calculateSumAndProduct(numbers));
