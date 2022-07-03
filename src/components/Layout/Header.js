import React from 'react';
import mealsImages from '../../assets/meals.jpg';
import classes from './Header.module.css';
const Button = () => {
    return <button>Cart</button>;
  };
const Header = (_props) =>{

return (

    <><header className={classes.header}>
        <h1>React Meal</h1>
        <Button />
    </header><div className={classes['main-image']}>
            <image src={mealsImages} alt="A table full of food" />

        </div></>

)
}
export default Header;
