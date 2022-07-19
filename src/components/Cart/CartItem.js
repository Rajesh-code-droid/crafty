import Classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={Classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={Classes.summary}>
          <span className={Classes.price}>{price}</span>
          <span className={Classes.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={Classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;