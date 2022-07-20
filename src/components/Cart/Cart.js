import Classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItem = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, ammount:1});
  };
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartitem = (
    <ul className={Classes.cart_items}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          ammount={item.ammount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartitem}
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button className={Classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={Classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
