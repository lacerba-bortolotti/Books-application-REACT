import React from 'react';

const BookCard = (props) =>{
  return(
    <div className="card-container">
      <img src={props.image} alt=""/>
      <div className="desc">
        <h2>Titolo: {props.title}</h2>
        <h2>Autore: {props.author}</h2>
        <h2>Pubblicazione: {props.published === '0000' ? 'Non disponibile' : props.published.substring(0,4)}</h2>
      </div>
    </div>
  )
}

export default BookCard;
