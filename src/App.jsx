import { useFetchCharacter } from './hooks/useFecthCharacters';
import './App.css';
import CardApp from './components/CardApp';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  
  const  {character: pokemon, loading:pokemonLoading} = useFetchCharacter(urlPokemon);
  const {character: rickandmorty, loading: rickandmortyLoading} = useFetchCharacter(urlRick);
  
  return (
    <>
      
      {pokemonLoading ? (
        <p>Loading...</p>
      ):(<CardApp  
            title='Personaje Pokemon'
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
        />)
        }
      
      {rickandmortyLoading ? (
        <p>Loading...</p>
      ):(<CardApp  
        title='Personaje Rick'
        name={rickandmorty.name}
        image={rickandmorty.image}
    />)
      }
    </>
  );
}

export default App;
