import './productCard.style.scss';
import Button from '../Botton/button.compoent';

const ProductCart = ({product}) => {
    const {name, price, imageUrl} = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType={'inverted'}>Add to card</Button>
        </div>
    );
}

export default ProductCart;