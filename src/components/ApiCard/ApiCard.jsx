import style from './ApiCard.module.css'

/* eslint-disable react/prop-types */
export const ApiCard = ({ name, status, species, gender, image }) => {
  return(
      <div className={style.container}>
        <h3>{name}</h3>
        <div className={style.info}>
          <span>{status}</span>
          <span>{species}</span>
          <span>{gender}</span>
        </div>
        <img src={image} alt={name} />
      </div>
  )
}