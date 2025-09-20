import CategoryMenu from './components/category-menu/category-menu.component';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import Authentication from './routes/Authentication/authentication.component';

const Shop = () => {
  return (
    <>
      <div>I am the Shop Page.</div>
    </>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
};

export default App;
