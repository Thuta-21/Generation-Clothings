import { Link, Outlet } from 'react-router-dom';
import crown from '../../assets/crown.svg';
import './navigation.style.scss';
// logo ကို component ပုံစံခေါ်လို့ရအောင်ရေးတာ (CRA မှာပဲအလုပ်လုပ်)

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className="nav-logo-container" to='/'><img src={crown} alt="" /></Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>Shop</Link>
            <Link className="nav-link" to='/auth'>Sign In</Link>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Navigation;