import './cart-dropdown.style.scss';
import Button from '../Botton/button.compoent'
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
            <Button buttonType='inverted'>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown;