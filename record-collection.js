// Configuração inicial da coleção de registros
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Função para atualizar registros na coleção
function updateRecords(records, id, prop, value) {
  // Acessa o álbum alvo na coleção de registros
  const album = records[id];

  // Atualiza o álbum com base nas condições
  if (value === "") {
    // Se o valor for uma string vazia, remove a propriedade do álbum
    delete album[prop];
  } else if (prop !== "tracks") {
    // Se a propriedade não for 'tracks', atualiza seu valor no álbum
    album[prop] = value;
  } else {
    // Se a propriedade for 'tracks', garante que existe um array de faixas e adiciona o novo valor
    album["tracks"] = album["tracks"] || [];
    album["tracks"].push(value);
  }

  // Retorna a coleção completa de registros
  return records;
}

// Exemplo de uso da função: atualiza o artista do álbum com ID 5439 para 'ABBA'
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
