import React, { useState } from 'react';
import { useEffect } from 'react';
import "./cart.css";
import { Link } from 'react-router-dom'
const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(() => {
        handlePrice();
    })

    return (
        <div>
        <div className='ch-co'>
            <article>
                {
                    cart?.map((item) => (
                        <div className="cart_box" key={item.id}>
                            <div className="cart_img">
                                <img src={item.img} />
                                <p>{item.title}</p>
                            </div>
                            <div>
                                <button onClick={() => handleChange(item, -1)}> - </button>
                                <button>{item.amount}</button>

                                <button onClick={() => handleChange(item, +1)}> + </button>
                            </div>
                            <div>
                                <span>Rs. {item.price}</span>
                                <button onClick={() => handleRemove(item.id)} ><ion-icon title="remove" name="trash-outline"></ion-icon></button>
                            </div>
                        </div>
                    ))}

            </article>
            <div className='total'>
                <span>Total Adoption Of Your Cart</span>
                <Link to='/Checkout' className='link'>CheckOut</Link>
                <span>Rs . {price}</span>
            </div>
            </div>
        </div>
    )
}

export default Cart