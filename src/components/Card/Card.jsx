import style from './Card.module.css'

/* eslint-disable react/prop-types */
export const Card = ({ name, desc, value, image, category, status }) => {
  return(
      <div className={style.container}>
        <div className={style.top}>
          <h3>{name}</h3>
          <div className={status ? style.stock : style.outOfStock}></div>
        </div>
        <h2>{desc}</h2>
        <div className={style.top}>
          <p>{category}</p>
          <p className={style.price}>R${value}</p>
        </div>
          <img src={image} alt={name} />
      </div>
  )
}