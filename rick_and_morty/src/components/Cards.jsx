import Card from './Card';

export default function Cards({characters}) {

   return (
   <div>
      {characters.map((character)=>{
         // para que muestre el objeto en consola se debe poner las llave a las props
         console.log(character.origin.name)
         return <Card 
                  id= {character.id} 
                  name={character.name} 
                  status={character.status} 
                  species={character.species} 
                  gender={character.gender} 
                  origin={character.origin.name} 
                  image={character.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')} 
                  />
      })}
      
   </div>
   );
}
