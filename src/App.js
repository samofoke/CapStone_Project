const App = () => {
  const categories = [
    {
      id: 1,
      title: "Sneakers",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Hats",
    },
    {
      id: 4,
      title: "Mens",
    },
    {
      id: 5,
      title: "Womens",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
