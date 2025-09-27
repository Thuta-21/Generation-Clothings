import { CategoryPreviewContainer, Previewtitle, Preview } from './category-preview.style.jsx';
import ProductCart from '../productCard/productCard.component';
import { Link } from 'react-router-dom';

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <Previewtitle>
                <span><Link to={title.toLowerCase()}>{title.toUpperCase()}</Link></span>
            </Previewtitle>
            <Preview>
                {products.filter((_, idx) =>  idx < 4).map(product => <ProductCart product={product}/>)}
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;