//Funcion con el algoritmo de burburja (bubble sort)

let number = [3, 6, 12, 5, 100, 1];

const bubbleSort = (number) => {
    let route = number.length;
    for (let i = 0; i < route; i++) {
        for (let j = 0; j < route - 1 - i; j++) {
            if (number[j] > number[j + 1]) {
                // Intercambio usando destructuring
                [number[j], number[j + 1]] = [number[j + 1], number[j]];
            }
        }
    }
    return number;
};

//console.log(bubbleSort(number));
 export { bubbleSort };
