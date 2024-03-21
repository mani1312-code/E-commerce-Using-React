import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const desc = "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource."

const ProductDisplay = ({item}) => {
    // console.log(item)

    const {name, id, price, seller, ratingsCount, quantity, img} = item

    const [prequantity, setQuantity] = useState(quantity)
    const [coupon, setCoupon] = useState("")
    const [size, setSize] = useState("Select Size")
    const [color, setColor] = useState("Select Color")
    const [cart, setCart] = useState(0)

    const handleSizeChange = (e) => {
      setSize(e.target.value)
    }

    const handleColorChange = (e) => {
      setColor(e.target.value)
    }

    const handleIncrease = () =>{
      setQuantity(prequantity + 1)
    }

    const handleDecrease = () =>{
      if(prequantity > 1){
        setQuantity(prequantity - 1)
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const product = {
        id: id,
        img: img,
        name: name,
        price: price,
        quantity: prequantity,
        size: size,
        color: color,
        coupon: coupon
      }
      // console.log(product)
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingProductIndex = existingCart.findIndex((item) => item.id === id)

      if(existingProductIndex !== -1){
        existingCart[existingProductIndex].quantity += prequantity;
      }
      else{
        existingCart.push(product)
      }

      // upadate local storage
      localStorage.setItem("cart", JSON.stringify(existingCart));

      // rest form fields
      setQuantity(1)
      setSize("Select Size")
      setColor("Select Color")
      setCoupon("")
    }
    


  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* cart componets */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* select size */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option value="Select Size">Select Size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* select color */}
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option value="Select Color">Select Color</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
              <option value="Pink">Pink</option>
              <option value="Gray">Gray</option>
              <option value="White">White</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* card plus minus */}
          <div className="cart-plus-minus">
            <div className='dec qtybutton' onClick={handleDecrease}>-</div>
            <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' 
            value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value), 10)}/>
            <div className='inc qtybutton' onClick={handleIncrease}>+</div>
          </div>

          {/* coupon field */}
          <div className="disount-code mb-2">
            <input type="text" placeholder='Enter Discount Code' onChange={(e) => setCoupon(e.target.value)} />
          </div>

          {/* btn section */}
          <button className="lab-btn" type='submit'>
            <span>Add to cart</span>
          </button>
          <Link className="lab-btn bg-primary " to='/cart-page'>
            <span>Check out</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default ProductDisplay
