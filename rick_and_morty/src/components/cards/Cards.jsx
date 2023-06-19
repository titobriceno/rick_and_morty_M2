import Card from '../card/Card';
import style from "./cards.module.scss"

export default function Cards({characters, onClose}) {



   return (
   <div className={style.container}>
      {characters.map((character)=>{
         // // para que muestre el objeto en consola se debe poner las llave a las props
         // console.log(character.origin.name)
         return <Card 
                  key = {character.id}
                  id= {character.id} 
                  name={character.name} 
                  status={character.status} 
                  species={character.species} 
                  gender={character.gender} 
                  origin={character.origin.name} 
                  image={character.image}
                  onClose={onClose} 
                  />
      })}
      
   </div>
   );
}
