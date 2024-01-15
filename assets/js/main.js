const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const maxRecords = 151;
let offset = 0;
const limit = 10;

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        
        const newHtml = pokemons.map((pokemon) => {
            const modifiedStats = pokemon.stats.map((stat) => {
                if (stat === 'special-attack') {
                    return 'Sp. Attack';
                } else if (stat === 'special-defense') {
                    return 'Sp. Defense';
                }
                return stat;
            });

            const stats = pokemon.stats_values.map((value) => {
                if (value >= 50 && value <= 100){
                    return ['green', value]
                }else if (value > 100) {
                    return ['green', 100]
                }else {
                    return ['red', value]
                }
            });

            const maxLength = Math.max(modifiedStats.length, pokemon.stats_values.length, stats.length);
            //A função Math.max é usada para obter o valor máximo entre os comprimentos das três listas. 
            //Isso garante que você percorra todas as listas e crie elementos para cada posição, mesmo que 
            //uma das listas seja mais curta do que as outras.

            const combinedList = [];

            for (let i = 0; i < maxLength; i++) {
                const statItem = modifiedStats[i] ? `<li>${modifiedStats[i]}</li>` : '<li"></li>';
                const valueItem = pokemon.stats_values[i] ? `<li class="values">${pokemon.stats_values[i]}</li>` : '<li class="values"></li>';
                
                const stripeItem = stats[i] ? `
                    <li class="stripeList">
                        <div class="backgroundStripe">
                            <div style="background-color: ${stats[i][0]}; width: ${stats[i][1]}%"></div>
                        </div>
                    </li>` : '<li class="stripeList"></li>';

                combinedList.push(statItem + valueItem + stripeItem);
            }

            const combinedListHTML = `<ul class="stat">${combinedList.join('')}</ul>`;
                    
        return `
            <li class="pokemon ${pokemon.type}">
                <img id="backimg" src="./assets/img/pokeball2.png" alt="pokeball">

                <span class="number">#${pokemon.number.padStart(3, '0')}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                </div>
                
                <button class="${pokemon.type} moreInfo" type="button">
                    More information
                </button>

                <div class="stats">
                    ${combinedListHTML}
                    
                </div>
            </li>   
        `}).join('');
        pokemonList.innerHTML += newHtml; 

        // Seria a mesma coisa que isto: pokemons.map((pokemon) => convertPokemonToHtml(pokemon))
        // Explicando a linha 24: "Pega a lista de pokemons, mapeia (map) e converte esta lista de pokemons, para uma lista de 
        //'<li></li>' (html)". Depois junta todos esses '<li></li>' sem separador nenhum (join). Pega tudo isso e concatena com 
        //o HTML antigo (pokemonList.innerHTML).
    });   
    // const moreInfoButton = document.getElementsByClassName('moreInfo');
    // console.log(moreInfoButton);
    // for (let i = 0; i < moreInfoButton.length; i++) {
    //     moreInfoButton[i].addEventListener("click", function() {
    //         moreInfoButton.style.backgroundColor = "#e74c3c";
    //     })  
    // };  
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const numberRecordsNextPage = offset + limit;

    if (numberRecordsNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItems(offset, limit);
    }
});


// const moreInfoPokemon = document.getElementsByClassName('pokemon');
// console.log(moreInfoPokemon);
// for (let i = 0; i < moreInfoButton.length; i++) {
//     moreInfoButton[i].addEventListener("click", function() {
//       // Lógica a ser executada quando um botão é clicado
      
//     });
//     console.log(moreInfoButton[i]);
//   }

// moreInfoButton.addEventListener('click', () => {
//     moreInfoButton.style.backgroundColor = "#e74c3c";
// })


  