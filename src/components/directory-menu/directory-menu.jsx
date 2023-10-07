import CategoryItemList from "../category-item/category-items";
import "../styles-component/categories/categories.scss";

const categories = [
  {
    id: 1,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 4,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
  {
    id: 5,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
];

const DirectoryMenu = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItemList key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
