import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";


const Product = ({id,title,price,rating,image}) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
            <small>$</small>
            <strong>{11.99}</strong>
        </p>
        <div className='product-rating'>
            {Array(rating)
              .fill()
               .map((_)=>(
                <p>🌟</p>
              ))}
              </div>
        </div>
              <img src={image} alt=''/>
   <button onClick={addToBasket}>Add to Basket</button>


      
    </div>
  )
}

export default Product
