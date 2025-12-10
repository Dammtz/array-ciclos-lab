import { duplicateValues } from './modules/exercisetwo.js';
import { calculateSumAndProduct } from './modules/exercisethree.js';
import { bubbleSort } from './modules/excercisesix.js';




// Esta función es llamada por el atributo onclick en los botones
  function flipCard(event, cardInnerId) {
    // Previene que el clic en el botón active otros eventos de la tarjeta si existieran
    event.stopPropagation(); 
    
  const cardElement = document.getElementById(cardInnerId);

  // Alterna la clase 'is-flipped': si existe la quita, si no existe la añade
  if (cardElement) { // Es buena práctica verificar que el elemento exista
    cardElement.classList.toggle('is-flipped');
  } else {
    console.error("Elemento no encontrado con ID:", cardInnerId);
  }
}

window.flipCard = function(event, cardInnerId) {
    event.stopPropagation(); 
    let cardElement = document.getElementById(cardInnerId);
    if (cardElement) {
        cardElement.classList.toggle('is-flipped');
    }
}

// Esta función es llamada por los botones "Ejecutar"
window.executeExercise = function(event, cardInnerId, exerciseType) {
    event.stopPropagation();

    // 1. Identificar IDs de input y output basados en cardInnerId (e.g., 'cardInner2' -> 'inputNum2')
    const inputId = 'inputNum' + cardInnerId.slice(-1);
    const outputId = 'output' + cardInnerId.slice(-1);
    
    const inputElement = document.getElementById(inputId);
    const outputElement = document.getElementById(outputId);

    if (!inputElement || !outputElement) return;

    // 2. Parsear el input del usuario (cadena de texto) a un array de números
    const rawInput = inputElement.value;
    const numbersArray = rawInput.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));
    if (numbersArray.length === 0) {
        outputElement.textContent = "Error: Ingresa números válidos separados por comas.";
        return;
    }
     
    let result;
    switch (exerciseType) {
        case 'duplicate':
            result = duplicateValues(numbersArray);
            break;
        case 'sumProduct':
            result = calculateSumAndProduct(numbersArray);
            break;
        case 'sort':
            result = bubbleSort(numbersArray);
            break;
        default:
            result = "Ejercicio no encontrado.";
    }
    outputElement.textContent = JSON.stringify(result);
  };