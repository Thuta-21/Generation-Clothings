import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <div className="nav-logo-container"><Link to='/'>LOGO</Link></div>
        <div className="nav-links-container">
            <Link to='/shop'>Shop</Link>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Navigation;