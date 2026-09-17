import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target='_blank'>
        <div>
        <div className='h-45 w-47 border-2 rounded-2xl overflow-hidden '>
        <img className='h-full object-cover'
        src={props.elem.download_url} alt="Image" />
      </div>
      <h2>{props.elem.author}</h2>
      </div>
      </a>
    </div>
  )
}

export default Card
