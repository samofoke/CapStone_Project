import "../styles-component/card-item/card-item.scss";

const CardItem = ({ item }) => {
  const { name, quant } = item;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quant}</span>
    </div>
  );
};

export default CardItem;
