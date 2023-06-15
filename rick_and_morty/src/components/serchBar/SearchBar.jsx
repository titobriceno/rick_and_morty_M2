import { useState } from "react";
import style from "./searchBar.module.scss"

export default function SearchBar(props) {
   const {onSearch} = props;
   // !pedir explicaicon de esto
   // de declaran dos variables con value ""
   const [id, setId] = useState();
   

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div className={style.serch_bar}>
         <input className={style.serch_input} type='search' onChange={handleChange} value={id} />
         <button className={style.serch_buton} onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}
