import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from '../assets/images/shop/del.png'
import ProceedToCheckout from './ProceedToCheckout';

const CartPage = () => {
  const [cartItem, setCartItems] = useState([]);

  useEffect(() => {
    // fetch cart from local storage
    const sotredCartItems = JSON.parse(localStorage.getItem("cart")) || []
    setCartItems(sotredCartItems)
  }, [])

  // calcutate prices
  const calculateTotalPrices = (item) => {
    return item.price * item.quantity
  }

  // Handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1
    setCartItems([...cartItem])

    // Update local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItem))
  }

  // Handle qunatity decrese
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1
      setCartItems([...cartItem])

      // Update local storage with new cart items
      localStorage.setItem("cart", JSON.stringify(cartItem))
    }
  }

  // Handle item remove
  const handleRemoveItem = (item) => {
    const updatedCart = cartItem.filter((cartItem) => cartItem.id !== item.id)

    // update new cart
    setCartItems(updatedCart)

    updateLocalStorage(updatedCart)
  }

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  // cart subtotal
  const cartSubtotal = cartItem.reduce((total, item) => {
    return total + calculateTotalPrices(item)
  }, 0)

  // order total
  const orderTotal = cartSubtotal


  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"cart Page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">

            {/* -----------  cart top ------------------ */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className='cat-product'>Product</th>
                    <th className='cat-price'>Price</th>
                    <th className='cat-quantity'>Quantity</th>
                    <th className='cat-toprice'>Total</th>
                    <th className='cat-edit'>Edit</th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody>
                  {
                    cartItem.map((item, index) => (
                      <tr key={index}>
                        <td className="product-item cat-product">
                          <div className="p-thumb">
                            <Link to="/shop"><img src={item.img} alt="" /></Link>
                          </div>
                          <div className="p-content">
                            <Link to="/shop">{item.name}</Link>
                          </div>
                        </td>

                        <td className="cat-price">$ {item.price}</td>
                        <td className="cat-quantity">
                          <div className="cart-plus-minus">
                            <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                            <input type="text" className="cart-plus-minus-box" name='qtybutton' value={item.quantity} />
                            <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                          </div>
                        </td>
                        <td className="cat-toprice">$ {calculateTotalPrices(item)}</td>
                        <td className="cat-edit">
                          <a href="#" onClick={() => handleRemoveItem(item)}>
                            <img src={delImgUrl} alt="" />
                          </a>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

            {/* ------ cart end ----- */}
            <div className="cart-bottom">

              {/* cheout box */}
              <div className="cart-checkout-box">
                <form action="" className="coupon">
                  <input type="text" name='coupon' id='coupon' className="cart-page-input-text" placeholder='Coupon code ...' />
                  <input type="submit" value="Apply Coupon" />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                    <ProceedToCheckout />
                  </div>
                </form>
              </div>
              {/* ------ checkout box end */}


              {/* shopping box */}
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kindom (UK)</option>
                          <option value="uk">United States (USA)</option>
                          <option value="bl">Bangladesh</option>
                          <option value="pak">Pakisthan</option>
                          <option value="ind">India</option>
                          <option value="np">Nepal</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className="outline-select shipping-select">
                        <select>
                          <option value="uk">London</option>
                          <option value="uk">New York</option>
                          <option value="bl">Dhaka</option>
                          <option value="pak">Korachi</option>
                          <option value="ind">New Delhi</option>
                          <option value="np">Kathmandu</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input type="text" name='postalcode' id='postalcode' placeholder='Postalcode/ZIP *' className="cart-page-input-text" />
                      <button type='submit'>Update Adress</button>
                    </div>
                  </div>


                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className='pull-left'>Cart Subtotal</span>
                          <p className='pull-right'>$ {cartSubtotal}</p>
                        </li>
                        <li>
                          <span className='pull-left'>Shipping and Handling</span>
                          <p className='pull-right'>Free Shipping</p>
                        </li>
                        <li>
                          <span className='pull-left'>Order Total</span>
                          <p className='pull-right'>$ {orderTotal.toFixed(2)}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
