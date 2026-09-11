import React from 'react'

const Item = ({ title, price }) => {
  return (
    <article className="item-card">
        <div className="react-mark" aria-label="React logo" role="img">
          <span />
        </div>
        <h2>Title:{title}</h2>
        <h3>Price:{price}</h3>
        <button type="button">Add to cart</button>
    </article>

  )
}

export default Item