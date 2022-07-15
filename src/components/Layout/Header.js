import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import MealsImages from "../../assets/meals.jpg";
import Classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={Classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={Classes["main-image"]}>
        <img src={MealsImages} alt="" />
      </div>
    </Fragment>
  );
};
export default Header;
