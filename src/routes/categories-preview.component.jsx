// import SHOP_DATA from "../shop-data.json";

import { useContext, Fragment } from "react";
import { CategoriesContext } from "../contexts/categories.context";
// import "./categories-preview.styles.scss";

// import ProductCard from "../components/product-card/product-card.component";
import CategoryPreview from "../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
