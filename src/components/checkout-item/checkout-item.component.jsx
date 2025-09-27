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
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ product }) => {
  const { imageUrl, name, price, quantity } = product;
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(product);
  };
  const addItemHandler = () => {
    addItemToCart(product);
  };
  const removeItemHandler = () => {
    removeItemFromCart(product);
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
