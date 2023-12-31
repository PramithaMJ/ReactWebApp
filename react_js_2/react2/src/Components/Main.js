function Main({ name, city, image, position }) {
  return (
    <div>
      <img
        src={
          image
            ? `${image}`
            : `https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
        }
        alt="teddy photo"
      />
      <div className="main_details">
        <h3>{!name ? `no-name` : `${name}`}</h3>
        <p>
          <span>{city}</span>
          <span>{position}</span>
        </p>
      </div>
    </div>
  );
}

export default Main;
