import { useCart } from "../Context/Cartcontext";
import { Link } from "react-router";

function Cart() {
  const { cartItems, clearCart } = useCart();

  return (
    <div>
  

      {cartItems.map((item, index) => (
        <div key={index}>
          <h4>{item.strMeal}</h4>
          <img src={item.strMealThumb} width="150" />
        </div>
      ))}
      <Link to='/buynow'><button>Buy Now</button></Link>
        {cartItems.length > 0 && (
        <button onClick={clearCart}>
          Clear Cart
        </button>
      )}
    </div>
  );
}

export default Cart;
