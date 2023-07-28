const Unit = ({ image, name, city, posistion }) => {
  return (
    <div className="unit__container">
      <img src={image} alt="{name}" />
      <h3>{name}</h3>
      <p>
        <span>{city}</span>
        <span>{posistion}</span>
      </p>
    </div>
  );
};

export default Unit;
