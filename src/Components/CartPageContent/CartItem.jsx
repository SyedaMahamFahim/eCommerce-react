import React, { useState } from 'react'
import { connect } from "react-redux";
import {
    adjustItemQty,
    removeFromCart,
} from "../../redux/Shopping/ShoppingActions";

const CartItem = ({ item, adjustQty,removeFromCart }) => {
    const customeStyle = {
        width: "400px"
    }
 
    const [input, setInput] = useState(item.qty);
    

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(item.id, e.target.value);
    };
  
    return (
        <>
            <div >
                <img src={item.image} alt="" style={customeStyle} />
                <p >{item.title}</p>
                <p >{item.description}</p>
                <p >$ {item.price}</p>
                <br /><br />
              
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(item.id)}>
          Remove from Cart
        </button>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(null, mapDispatchToProps)(CartItem);