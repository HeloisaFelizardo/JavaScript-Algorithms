// Configuração da função phoneticLookup que realiza uma pesquisa fonética
function phoneticLookup(val) {
	// Inicializa a variável result que será usada para armazenar o resultado da pesquisa
	let result = '';
	// Define um objeto lookup que mapeia palavras fonéticas para seus equivalentes
	var lookup = {
		alpha: 'Adams',
		bravo: 'Boston',
		charlie: 'Chicago',
		delta: 'Denver',
		echo: 'Easy',
		foxtrot: 'Frank',
	};
	// Atribui à variável result o valor associado à chave 'val' no objeto lookup
	result = lookup[val];
	// Retorna o resultado da pesquisa fonética
	return result;
}
// Exemplo de uso da função: pesquisa fonética para a chave 'charlie'
phoneticLookup('charlie');
