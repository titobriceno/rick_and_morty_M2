import { useState } from "react";
import style from "./searchBar.module.scss"

export default function SearchBar({onSearch}) {
   // !pedir explicaicon de esto
   // de declaran dos variables con value ""
   const [searchValue, setSerchValue] = useState("");
   // creamos otra función para ejecutarla
   const handleSearch = ()=>{
      onSearch(searchValue)
   }
   return (
      <div className={style.serch_bar}>
         <input className={style.serch_input} type='search' onChange={(e) => setSerchValue(e.target.value)}  />
         <button className={style.serch_buton} onClick={handleSearch}>Agregar</button>
      </div>
   );
}
