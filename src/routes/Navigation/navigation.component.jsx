import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import crown from '../../assets/crown.svg';
import { user } from '../../store/user/user.selector.jsx';
import { NavContainer, NavLogo, NavLinksContainer, NavLink } from './navigation.style.jsx';
// logo ကို component ပုံစံခေါ်လို့ရအောင်ရေးတာ (CRA မှာပဲအလုပ်လုပ်)
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector.jsx';
import { useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.actions.jsx';

const Navigation = () => {
  const currentUser = useSelector(user); //redux ထဲကနေ dataယူတာ
  const isDropdownOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  return (
    <>
      <NavContainer>
        <NavLogo to='/'><img src={crown} alt="" /></NavLogo>
        <NavLinksContainer>
            <NavLink to='/shop'>Shop</NavLink>
            {currentUser 
            ? <NavLink as='span' onClick={() => dispatch(signOutStart())}>Sign Out</NavLink> 
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