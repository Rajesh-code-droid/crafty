import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if(action.type ==='Add'){
    const updatedItems=state.items.concat(action.item);
    const updateTotalAmount=state.totalAmount+action.item.price*action.item.amount;
    return({
      items:updatedItems,
      totalAmount:updateTotalAmount
    });

  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({type:'Add', item: item});
  };
  const romoveItemFromCartHandler = (id) => {
    dispatchCartAction({type:'REMOVE', id: id});
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: romoveItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
