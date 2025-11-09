import {
  CheckoutItemContainer,
  ImageContainer,
  Arrow,
  Value,
  RemoveBtn,
  Name,
  Quantity,
  Price,
} from "./checkout-item.style.jsx";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ product }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price, quantity } = product;
  const cartItems = useSelector(selectCartItems)

  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, product));
  };
  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, product));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>${price}</Price>
      <RemoveBtn onClick={clearItemHandler}>&#10005;</RemoveBtn>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
