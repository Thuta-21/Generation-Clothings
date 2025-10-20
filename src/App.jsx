import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Authentication from "./routes/Authentication/authentication.component";
import Shop from "./routes/Shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { checkCurrentUser} from "./store/user/user.actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;