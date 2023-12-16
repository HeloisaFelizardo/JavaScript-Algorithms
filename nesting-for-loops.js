// Função multiplyAll que multiplica todos os elementos de um array bidimensional
function multiplyAll(arr) {
	// Inicializa uma variável 'product' para armazenar o resultado da multiplicação
	let product = 1;

	// Itera sobre as linhas do array externo (arr)
	for (let i = 0; i < arr.length; i++) {
		// Itera sobre os elementos dentro de cada subarray (linha)
		for (let j = 0; j < arr[i].length; j++) {
			// Multiplica o elemento atual pelo acumulado em 'product'
			product = product * arr[i][j];
		}
	}

	// Retorna o produto resultante da multiplicação de todos os elementos
	return product;
}

// Exemplo de uso da função: multiplica todos os elementos do array bidimensional
multiplyAll([
	[1, 2],
	[3, 4],
	[5, 6, 7],
]);
