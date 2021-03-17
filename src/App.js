import React, { useState } from "react";
import './App.css';
import SelectableItem from './components/SelectableItem'
import CartButton from './components/CartButton'
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const stock = ["Apple", "Banana"];
  const [cart, setCart] = useState([]);
  const [showCart, setToggle] = useState(false);


  const addToCart = (title) => {
    setCart([...cart, {title: title, id: uuidv4()}]);
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => {
      return item.id !== id
    }))
  }

  const toggle = () => {
    setToggle(!showCart);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Cart-container">
          <CartButton 
            count={cart.length}
            onClick={()=>toggle()}
          />
        </div>
        
        <p>
          {showCart ? 
            "Your Cart":
            "Add items to your cart"
          }
        </p>
        <div>
          {showCart ? 
            cart.map(element=>{
              return <SelectableItem 
                key={element.id} 
                title={element.title} 
                buttonText="remove"
                onClick={()=>removeFromCart(element.id)}
              />
            }):
            stock.map(element=>{
              return <SelectableItem 
                key={element} 
                title={element} 
                buttonText="add"
                onClick={()=>addToCart(element)}
              />
            })
          }
        </div>
        
      </header>

    </div>
  );
}

export default App;
