import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <div className='card-body'>
            <img className='card-img' src= {props.img} alt='Not available'></img>
            <h1 className='card-title'>{props.title}</h1>
            <p className='card-description'>{props.desc}</p>
        </div>
        <button className='card-btn'>About the Series</button>
    </div>
  )
}

export default Card