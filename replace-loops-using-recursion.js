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
