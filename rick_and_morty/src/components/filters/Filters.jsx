import React from "react";
import style from "./filters.module.scss"
import imgLogo from '../../img/rickLogo.png'
import imgRick from "../../img/rickImag.png"

const Presentation = () => {

  return(
    <section className={style.container}>
      <div  className={style.section}>
          <div className={style.logo}>
          <img className={style.logo_img} src={imgLogo} alt="Logo Rick" />
        </div>
          <div className={style.imgRick}>
          <img className={style.imgRick_img} src={imgRick} alt="rick and morty" />
      </div>
      </div>
      <div className={style.filter}>
        <span className={style.filter_span}>Decent</span>
        <span className={style.filter_span}>Gender</span>
      </div>
    </section>
    
  )
}

export default Presentation