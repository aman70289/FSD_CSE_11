import React from 'react'
import Item from './Item'

const Home = () => {
  const itemData=[
    {title:"ReactJS",price:"564"},
    {title:"NodeJS",price:"556"},
    {title:"ExpressJS",price:"784"}

  ]

  return (
    <div className="Home">
        {
          itemData.map((item) => (
            <Item key={item.title} title={item.title} price={item.price} />
          ))
        }
        </div>
  )
}

export default Home