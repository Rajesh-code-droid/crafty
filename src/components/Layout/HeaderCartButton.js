import { useContext , useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import Classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const[btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const {items}= cartCtx;
  const buttonClass = `${Classes.button} ${btnIsHighlighted ? Classes.bump : ''}`;
  useEffect(()=>{
    if(cartCtx.items.length === 0){
      return;
    }
    setBtnIsHighlighted(true);
    const timer= setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return ()=>{
      clearTimeout(timer);
    };
  },[items]);
  return (
    <button className={buttonClass} onClick={props.onClick}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={Classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
