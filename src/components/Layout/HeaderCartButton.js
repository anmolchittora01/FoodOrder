import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({onCartClick=()=>{},cartCount}) => {
  return (
    <button onClick={onCartClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

export default HeaderCartButton;
