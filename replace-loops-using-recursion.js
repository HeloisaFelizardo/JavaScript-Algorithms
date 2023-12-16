// Função recursiva para somar os primeiros 'n' elementos de um array
function sum(arr, n) {
	// Caso base: se 'n' for menor ou igual a zero, retorna 0
	if (n <= 0) {
		return 0;
	} else {
		// Chamada recursiva: soma o elemento atual (arr[n-1]) com a soma dos elementos anteriores
		return sum(arr, n - 1) + arr[n - 1];
	}
}

console.log(sum([1], 0)); //deve ser igual a 0.
console.log(sum([2, 3, 4], 1)); //deve ser igual a 2.
console.log(sum([2, 3, 4, 5], 3)); //deve ser igual a 9.

// Função recursiva para multiplicar os primeiros 'n' elementos de um array
function multiply(arr, n) {
	// Caso base: se 'n' for menor ou igual a zero, retorna 1
	if (n <= 0) {
		return 1;
	} else {
		// Chamada recursiva: multiplica o elemento atual (arr[n-1]) com o produto dos elementos anteriores
		return multiply(arr, n - 1) * arr[n - 1];
	}
}

console.log(multiply([1], 0)); //deve ser igual a 1.
console.log(multiply([2, 3, 4], 1)); //deve ser igual a 2.
console.log(multiply([2, 3, 4, 5], 3)); //deve ser igual a 24.
