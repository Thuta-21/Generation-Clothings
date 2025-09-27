import React from "react";
import {
  BackgroundImage,
  CategoryItemContainer,
  CategoryItemBody,
} from "./category-item.style.jsx";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();
  const goSpecificCategory = () => {
    navigate(route);
  };

  return (
    <CategoryItemContainer onClick={goSpecificCategory}>
      <BackgroundImage imageUrl={imageUrl} />
      {/* styled component ဘက်ကို url pass လုပ်လိုက်တာ */}
      <CategoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryItemBody>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
