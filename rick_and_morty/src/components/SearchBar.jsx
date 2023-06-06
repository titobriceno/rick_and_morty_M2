import { useState } from "react";

export default function SearchBar({onSearch}) {
   // !pedir explicaicon de esto
   // de declaran dos variables con value ""
   const [searchValue, setSerchValue] = useState("");
   // creamos otra función para ejecutarla
   const handleSearch = ()=>{
      onSearch(searchValue)
   }
   return (
      <div>
         <input type='search' onChange={(e) => setSerchValue(e.target.value)}  />
         <button onClick={handleSearch}>Agregar</button>
      </div>
   );
}
