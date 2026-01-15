export default function PokemonCard({ pokemon }) {
  return (
    <div className="border rounded-lg bg-blue-100 p-4 shadow-md transition-all duration-500 ease-out 
    hover:shadow-xl hover:translate-y-1  hover-ring-2 hover:ring-blue-500 hover:ring-offset-2 transition-shadow">
      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name}
        className="w-full h-48 object-contain"
      />
      <h2 className="text-xl text-blue-700 font-bold capitalize mt-2">{pokemon.name}</h2>
      <p className="text-gray-600">#{pokemon.id}</p>
      <div className="mt-2">
        {pokemon.types.map((type) => (
          <span 
            key={type.type.name}
            className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm mr-2"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  )
}