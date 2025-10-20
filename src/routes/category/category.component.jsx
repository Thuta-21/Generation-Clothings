import { CategoryContainer, CategoryTitle } from "./category.style";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCart from "../../components/productCard/productCard.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    // category re-render ရမယ့်အစား selector re-render ဖြစ်တာက Middlewareကြောင့်ဖြစ်တာ။ reduer run => useSelector will call
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
