import React from 'react'
import './Pag404.css'
import picture from './assets/error404.png'
function pag404() {
  return (
    <div className='pag404'>
        <img src={picture} alt="" className='pag404__img'/>
        <div className='pag404__div'>
          <h3 class="pag404__title">We couldn't find the page you are looking for</h3>
          <a class="pag404__button" href="/">Return to home</a>
        </div>

    </div>
  )
}

export default pag404