function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="elements__element">
      <button className="elements__delete-button" type="button"></button>
      <img
        className="elements__picture"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="elements__info">
        <h2 className="elements__name">{props.card.name}</h2>
        <div className="elements__likes-container">
          <button
            className="elements__heart"
            type="button"
            aria-label="Лайк"
          ></button>
          <p className="elements__likes">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
