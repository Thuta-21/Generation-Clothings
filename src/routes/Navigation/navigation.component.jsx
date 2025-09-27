import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { Link, Outlet } from 'react-router-dom';
import crown from '../../assets/crown.svg';
import { NavContainer, NavLogo, NavLinksContainer, NavLink } from './navigation.style.jsx';
import { signOutUser } from '../../utilities/firebase/firebase.utilis';
// logo ကို component ပုံစံခေါ်လို့ရအောင်ရေးတာ (CRA မှာပဲအလုပ်လုပ်)
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isDropdownOpen } = useContext(CartContext);

  return (
    <>
      <NavContainer>
        <NavLogo to='/'><img src={crown} alt="" /></NavLogo>
        <NavLinksContainer>
            <NavLink to='/shop'>Shop</NavLink>
            {currentUser 
            ? <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink> 
            : <NavLink to='/auth'>Sign In</NavLink> }
            <CartIcon/>
        </NavLinksContainer>
        {isDropdownOpen && <CartDropdown/>}
      </NavContainer>
      <Outlet/>
    </>
  )
}

export default Navigation;