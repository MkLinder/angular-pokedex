const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id.toString();
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type; // Obs: 'type' é o tipo principal da lista de tipos de cada pokemon.
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    const stats = pokeDetail.stats.map((allStats) => allStats.stat.name);
    const values = pokeDetail.stats.map((allStats) => allStats.base_stat);
    

    pokemon.stats = stats; // Obs: stats é uma lista de objetos. pacessar as propriedades: stats.base_stat e stats.stat.name
    // pokemon.stat_name = stats.stat
    pokemon.stats_values = values;

    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon);
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)   // 'fetch()' retorna uma 'promisse'. 'then()' executa depois do fetch.
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .catch((error) => console.error(error)); 
        // .finally(() => console.log('Requisição concluída.'))  // Conclui a requisição, independente de sucesso ou fracasso.
}

// Para pegar os detalhes dos pokemons, precisamos acessar a url que vem com as primeiras infos dele.
// Usaremos o 'Promise.all([])' para acessar cada um deles e retornar tudo em uma lista.
