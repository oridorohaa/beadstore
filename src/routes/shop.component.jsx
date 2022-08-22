// import SHOP_DATA from "../shop-data.json";

import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "./categories-preview.component";
import Category from "./category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
