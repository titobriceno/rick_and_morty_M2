import React from "react";
import style from "./card.module.scss"

const Card = (props) => {

   const {id,name,status,species,gender,origin,image,onClose} = props;
   return (
      <div className={style.container}>
         <div className={style.container_img}>
            <img className={style.pj_img} src={image} alt='imgPj' />   
         </div>
         
         <div className={style.container_data}>
            <h2 className={style.container_name}>{name}</h2>
            <h2 className={style.container_text}>{status}</h2>
            <h2 className={style.container_text}>{species}</h2>
            <h2 className={style.container_text}>{gender}</h2>
            <h2 className={style.container_text}>{origin}</h2>
            <button className={style.container_btn} onClick={()=>{onClose(id)}}>Close</button>

         </div>
         
      </div>
   );
}


export default Card
