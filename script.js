// Invertir Cadena
document.getElementById('reverseStringButton').addEventListener('click', function() {
    const str = document.getElementById('stringInput').value;
    const reversedStr = str.split('').reverse().join('');
    document.getElementById('reversedString').innerText = `Cadena Invertida: ${reversedStr}`;
});

// Verificar Número Primo
document.getElementById('checkPrimeButton').addEventListener('click', function() {
    const num = parseInt(document.getElementById('primeInput').value);
    let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    document.getElementById('primeResult').innerText = isPrime ? `${num} es un número primo` : `${num} no es un número primo`;
});

// Eliminar Duplicados en Arreglo
document.getElementById('removeDuplicatesButton').addEventListener('click', function() {
    const arr = document.getElementById('arrayInput').value.split(',').map(Number);
    const uniqueArr = [...new Set(arr)];
    document.getElementById('uniqueArray').innerText = `Arreglo sin duplicados: ${uniqueArr.join(', ')}`;
});

// Calcular Factorial de un Número
document.getElementById('calculateFactorialButton').addEventListener('click', function() {
    const num = parseInt(document.getElementById('factorialInput').value);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById('factorialResult').innerText = `Factorial de ${num} es ${factorial}`;
});

// Contar Vocales en una Cadena
document.getElementById('countVowelsButton').addEventListener('click', function() {
    const str = document.getElementById('vowelCountInput').value;
    const vowels = str.match(/[aeiouáéíóúü]/gi);
    const count = vowels ? vowels.length : 0;
    document.getElementById('vowelCountResult').innerText = `Número de vocales: ${count}`;
});

// Sumar Números de un Arreglo
document.getElementById('sumArrayButton').addEventListener('click', function() {
    const arr = document.getElementById('sumArrayInput').value.split(',').map(Number);
    const sum = arr.reduce((acc, num) => acc + num, 0);
    document.getElementById('sumArrayResult').innerText = `Suma de los números: ${sum}`;
});

// Buscar Máximo en un Arreglo
document.getElementById('findMaxButton').addEventListener('click', function() {
    const arr = document.getElementById('maxArrayInput').value.split(',').map(Number);
    const max = Math.max(...arr);
    document.getElementById('maxArrayResult').innerText = `Número máximo: ${max}`;
});
