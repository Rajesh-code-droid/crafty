import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartitem = (
    <ul className={Classes.cart_items}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key="{item}">{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartitem}
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>35.99</span>
      </div>
      <div>
        <button className={Classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={Classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
