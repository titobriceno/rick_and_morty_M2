import React from "react";
import style from "./card.module.scss"

const Card = (props) => {
   return (
      <div className={style.container}>
         <div className={style.container_img}>
            <img className={style.pj_img} src={props.image} alt='imgPj' />   
         </div>
         
         <div className={style.container_data}>
            <h2 className={style.container_name}>{props.name}</h2>
            <h2 className={style.container_text}>{props.status}</h2>
            <h2 className={style.container_text}>{props.species}</h2>
            <h2 className={style.container_text}>{props.gender}</h2>
            <h2 className={style.container_text}>{props.origin}</h2>
            <button className={style.container_btn} onClick={props.onClose}>Close</button>

         </div>
         
      </div>
   );
}


export default Card
