import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ProductCardContainer, Footer } from './productCard.style';
import Button, {BUTTON_TYPE_CLASSES} from '../Botton/button.compoent';


const ProductCart = ({product}) => {
    const {name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);

    const addItem = () => {
        addItemToCart(product);
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