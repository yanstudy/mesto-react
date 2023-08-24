import { useRef, useEffect } from "react";
import { FormValidator } from "../utils/FormValidator";
import { configFormSelector } from "../utils/configFormSelector";

function PopupWithForm({
  isOpen,
  onClose,
  name,
  title,
  onSubmit,
  isLoading,
  children,
}) {
  const formElement = useRef();
  const popup = useRef();

  // включение валидации при монтировании
  useEffect(() => {
    const validator = new FormValidator(
      configFormSelector,
      formElement.current
    );
    validator.enableValidation();

    if (isOpen) {
      validator.resetError();
      validator.disableButton();
    }
  }, [isOpen]);

  // установка слушателей закрытия попапа по клавише esc и по оверлею при монтированнии и удаление при размонтировании
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const closePopupOverlay = (e) => {
      if (e.currentTarget === e.target) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    if (popup.current) {
      popup.current.addEventListener("mousedown", closePopupOverlay);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      if (popup.current) {
        popup.current.removeEventListener("mousedown", closePopupOverlay);
      }
    };
  });

  return (
    <section
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      id={`${name}`}
      ref={popup}
    >
      <div className="popup__container">
        <button
          className="popup__close-icon popup__close-icon_edit"
          type="button"
          aria-label="Кнопка закрытия попапа"
          onClick={onClose}
        ></button>
        <form
          className="popup__form"
          name={`${name}`}
          onSubmit={onSubmit}
          noValidate
          ref={formElement}
        >
          <h3 className="popup__edit">{title}</h3>
          {children}
          <button
            type="submit"
            className="popup__button popup__button_edit"
            disabled={isLoading}
          >
            {isLoading ? "Сохранить..." : "Сохранить"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
