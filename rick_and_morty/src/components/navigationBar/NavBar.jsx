import React from "react";
import style from "./navbar.module.scss"
import SearchBar from "../serchBar/SearchBar";

const NavBar = (props)=>{
  /* por medio de la destructuración le indicamos que sacamos del objeto prop,
  esto funciona ya que al usas el nombre el objeto que esta guardado en la prop se extrae
  con destructurción */
  const {onSearch} = props; 

  return(
    <nav className={style.container}>
    <div className={style.menu}>
      <ul className={style.menu_ul}>
        <li className={style.menu_li}>Home</li>
        <li className={style.menu_li}>About</li>
        <li className={style.menu_li}>Favorite</li>
      </ul>
    </div>
    <div>
      <SearchBar className={style.serch_bar} onSearch={onSearch}/>
    </div>
  </nav>
  )
  

}

export default NavBar