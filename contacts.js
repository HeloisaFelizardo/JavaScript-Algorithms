// Configuração: Array de objetos que armazena informações de contatos
const contacts = [
	{
		firstName: 'Akira',
		lastName: 'Laine',
		number: '0543236543',
		likes: ['Pizza', 'Coding', 'Brownie Points'],
	},
	{
		firstName: 'Harry',
		lastName: 'Potter',
		number: '0994372684',
		likes: ['Hogwarts', 'Magic', 'Hagrid'],
	},
	{
		firstName: 'Sherlock',
		lastName: 'Holmes',
		number: '0487345643',
		likes: ['Intriguing Cases', 'Violin'],
	},
	{
		firstName: 'Kristian',
		lastName: 'Vos',
		number: 'unknown',
		likes: ['JavaScript', 'Gaming', 'Foxes'],
	},
];

// Função lookUpProfile que busca informações de contatos por nome e propriedade
function lookUpProfile(name, prop) {
	// Itera sobre o array de contatos
	for (let i = 0; i < contacts.length; i++) {
		// Verifica se o nome do contato na posição atual é igual ao nome procurado
		if (contacts[i].firstName === name) {
			// Verifica se o contato possui a propriedade procurada
			if (contacts[i].hasOwnProperty(prop)) {
				// Retorna o valor da propriedade para o contato encontrado
				return contacts[i][prop];
			} else {
				// Retorna 'No such property' se a propriedade não existir para o contato encontrado
				return 'No such property';
			}
		}
	}
	// Retorna 'No such contact' se nenhum contato for encontrado com o nome fornecido
	return 'No such contact';
}

// Exemplo de uso da função: busca os likes do contato com o nome 'Akira'
console.log(lookUpProfile('Akira', 'likes'));
