import React from 'react'

const Box = (props) => {
  let result = props.result;
    return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2 data-testid="item-name">{props.item && props.item.name}</h2>
      <div className='img-box'>
        <img className="item-img" src={props.item && props.item.img} />
      </div>
      <h2>{result}</h2>
    </div>
  )
}

export default Box