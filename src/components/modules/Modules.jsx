import React from 'react'
import Module from './module/Module'
import './modules.css'

const Modules = () => {
  return (
    <main className='module__container'>

      <h1 className='billing'>Billing and Accounts</h1> 

      <Module
        banner="HR"
        heading="Human Resource Module"
        desc="manage your human resource in one place with ease and much more .."
        price="N 40,000NGN"
      />

      <Module
        banner="payroll"
        heading="Payroll Module"
        desc="manage your payroll and salary payment in one place with ease and do much more .."
        price="N 60,000NGN"
      />

      <Module
        banner="Leave management"
        heading="Leave management Module"
        desc="manage your human resource in one place with ease and do much more .."
        price="N 30,000NGN"
      />  
      
    </main>
  )
}

export default Modules