import React from 'react'
import { BtnQuote } from './BtnQuote'


const QuotesBox = ({quotesRandom, handleClick, colorRandom}) => {
  const objStyle = {
    color: colorRandom,
  }
  
  const objStyleBtn = {
    backgroundColor: colorRandom
  }


  return (
    <article className='card' style={objStyle} >
      <i className='card__icon fa-solid fa-quote-left'></i>
      <p className='card__quote'>{quotesRandom.quote}</p>
      <h1 className='card__author'>{quotesRandom.author}</h1>
      <BtnQuote
        objStyleBtn= {objStyleBtn}
        handleClick= {handleClick}
        
      />
    </article>
  )
}

export default QuotesBox