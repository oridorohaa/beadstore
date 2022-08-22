import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
const categories = [
  {
    id: 1,
    title: "Earings",
    imageUrl: "https://i.ibb.co/sHr2HtZ/blue-earrings.jpg",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Necklaces",
    imageUrl: "https://i.ibb.co/7Y4ZCqN/beads-necklace.jpg",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Rings",
    imageUrl:
      "https://i.ibb.co/mqZ3FBk/Screen-Shot-2022-08-13-at-1-47-24-PM.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Anklets",
    imageUrl:
      "https://i.ibb.co/5j1BLpk/Screen-Shot-2022-08-13-at-1-54-02-PM.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Other",
    imageUrl:
      "https://i.ibb.co/ThdR4NR/catrin-johnson-Ple-ATAp-Y2-Lk-unsplash.jpg",
    route: "shop/mens",
  },
];
const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
