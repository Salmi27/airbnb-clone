function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img className="card__img" src={`images/${props.img}`} alt="image" />
      <div className="card__stats">
        <img className="card__star " src="images/star.png" alt="star" />
        <p>
          <span>{props.rating}</span>
          <span className="grey">
            ({props.reviewCount}) • {props.location}
          </span>
        </p>
      </div>
      <p className="card__title">{[props.title]}</p>
      <p className="card__price">
        <span className="bold ">From ${props.price} </span>/ person
      </p>
    </div>
  );
}

export default Card;
