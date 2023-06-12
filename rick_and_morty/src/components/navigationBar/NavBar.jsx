import React from "react";
import style from "./navbar.module.scss"
import SearchBar from "../serchBar/SearchBar";

const NavBar = ()=>{
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
      <SearchBar className={style.serch_bar} onSearch={(characterID) => window.alert(characterID)}/>
    </div>
  </nav>
  )
  

}

export default NavBar