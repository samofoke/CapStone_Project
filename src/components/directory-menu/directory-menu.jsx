import CategoryItem from "../category-item/category-items";
import "../styles-component/categories/categories.scss";

const DirectoryMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
