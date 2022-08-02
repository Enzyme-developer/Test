import React from 'react'
import './module.css'

const Module = ({heading, desc, price, banner}) => {
  return (
      <div className='module'>
        <div className='module__image'>
          <p className="banner">{banner}</p>
          <img src='https://static.vecteezy.com/system/resources/previews/005/608/294/original/a-happy-family-with-two-children-having-fun-while-flying-kites-on-a-family-holiday-young-family-flying-a-kite-cartoon-illustration-free-vector.jpg' alt='illustration' />
        </div>
        
        <div className="module__text">
          <h3>{heading}</h3>
          <p className='module__text__desc'>{desc}</p>
          <p className="module__text__low">For as low as</p>
          <p className="module__text__price"><span className='price'>{price}</span> per employer</p>
        </div>
    </div>
  )
}

export default Module