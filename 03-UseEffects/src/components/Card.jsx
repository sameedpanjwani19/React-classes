import React from 'react'

const Card = ({image, title, description, price}) => {
  return (
    <>
    <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </>
  )
}

export default Card
