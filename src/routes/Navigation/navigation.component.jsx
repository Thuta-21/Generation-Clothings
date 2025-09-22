import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { Link, Outlet } from 'react-router-dom';
import crown from '../../assets/crown.svg';
import './navigation.style.scss';
import { signOutUser } from '../../utilities/firebase/firebase.utilis';
// logo ကို component ပုံစံခေါ်လို့ရအောင်ရေးတာ (CRA မှာပဲအလုပ်လုပ်)
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isDropdown } = useContext(CartContext)
  return (
    <>
      <div className='navigation'>
        <Link className="nav-logo-container" to='/'><img src={crown} alt="" /></Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>Shop</Link>
            {currentUser 
            ? <span className='nav-link' onClick={signOutUser}>Sign Out</span> 
            : <Link className="nav-link" to='/auth'>Sign In</Link> }
            <CartIcon/>
        </div>
        {isDropdown && <CartDropdown/>}
      </div>
      <Outlet/>
    </>
  )
}

export default Navigation;