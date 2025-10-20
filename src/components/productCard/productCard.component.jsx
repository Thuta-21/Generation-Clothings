import { ProductCardContainer, Footer } from './productCard.style';
import Button, {BUTTON_TYPE_CLASSES} from '../Botton/button.compoent';
import { addItemToCart } from '../../store/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCart = ({product}) => {
    const dispatch = useDispatch();
    const {name, price, imageUrl} = product;
    const cartItems = useSelector(selectCartItems)
    const addItem = () => {
        dispatch(addItemToCart(cartItems, product))
    }
    
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name}/>
            <Footer>
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItem}>Add to card</Button>
        </ProductCardContainer>
    );
}

export default ProductCart;