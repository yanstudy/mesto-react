function ImagePopup(props) {
  return (
    <section
      className={`popup popup_dark ${props.isOpen ? "popup_opened" : ""}`}
      id={`${props.name}`}
    >
      <div className="popup__image-container">
        <button
          className="popup__close-icon popup__close-icon_pict"
          type="button"
          aria-label="Кнопка закрытия попапа"
          onClick={props.onClose}
        ></button>
        <img
          src={props.card.link}
          alt={props.card.name}
          className="popup__image"
        />
        <p className="popup__title">{props.card.name}</p>
      </div>
    </section>
  );
}

export default ImagePopup;
