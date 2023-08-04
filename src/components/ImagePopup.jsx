import { useRef, useEffect } from "react";
function ImagePopup(props) {
  const popup = useRef();
  // установка слушателей закрытия попапа по клавише esc и по оверлею при монтированнии и удаление при размонтировании
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        props.onClose();
      }
    };

    const closePopupOverlay = (e) => {
      if (e.currentTarget === e.target) {
        props.onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    popup.current.addEventListener("mousedown", closePopupOverlay);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      popup.current.removeEventListener("mousedown", closePopupOverlay);
    };
  });
  return (
    <section
      className={`popup popup_dark ${props.isOpen ? "popup_opened" : ""}`}
      id={`${props.name}`}
      ref={popup}
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
