import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartIsShown = () => {
    setCartIsShown(true);
  };
  const hideCartIsShown = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartIsShown} />}
      <Header onShowCart={showCartIsShown} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
