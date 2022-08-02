import React from 'react'
import './pay.css'

const Pay = () => {
  return (
      <aside className='payment'>
        <div className='payment__top'>
          <h3 className='payment__top__logo'>CloudletHr</h3>
          <p className='payment__top__desc'>Industry tested no1 software solution for modern human resource providers over the world</p>
        </div>

        <div className="payment__middle">
          <h1 className="payment__middle__paying">Paying</h1> <br />
          <span className='payment__middle__price'>N 40,000NGN</span> <br />
          <p className='payment__middle__people'>for 300 employees</p>
        </div>

        <div className="payment__bottom">
          <div class="triangle-up"></div>
          <button>Make Payment</button>
        </div>

    </aside>
  )
}

export default Pay