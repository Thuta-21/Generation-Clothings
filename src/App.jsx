import CategoryMenu from './components/category-menu/category-menu.component';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import SignIn from './routes/Sign-in/sign-in.component';

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
        <Route path='/signin' element={<SignIn/>}/>
      </Route>
    </Routes>
  );
};

export default App;
