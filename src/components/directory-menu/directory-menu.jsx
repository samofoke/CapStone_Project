import CategoryItemList from "../category-item/category-items";
import "../styles-component/categories/categories.scss";

const DirectoryMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItemList key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
