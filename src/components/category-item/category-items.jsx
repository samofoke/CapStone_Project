import "../styles-component/category-items/category-items.scss";

const CategoryItemList = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-container-list">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItemList;
