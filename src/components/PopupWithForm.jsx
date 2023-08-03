import { useRef, useEffect } from "react";
import { FormValidator } from "../utils/FormValidator";
import { configFormSelector } from "../utils/configFormSelector";

function PopupWithForm(props) {
  const formElement = useRef();

  useEffect(() => {
    const validator = new FormValidator(
      configFormSelector,
      formElement.current
    );
    validator.enableValidation();
  }, []);

  return (
    <section
      className={`popup ${props.isOpen ? "popup_opened" : ""}`}
      id={`${props.name}`}
    >
      <div className="popup__container">
        <button
          className="popup__close-icon popup__close-icon_edit"
          type="button"
          aria-label="Кнопка закрытия попапа"
          onClick={props.onClose}
        ></button>
        <form
          className="popup__form"
          name={`${props.name}`}
          onSubmit={props.onSubmit}
          noValidate
          ref={formElement}
        >
          <h3 className="popup__edit">{props.title}</h3>
          {props.children}
          <button
            type="submit"
            className="popup__button popup__button_edit"
            disabled={props.isLoading}
          >
            {props.isLoading ? "Сохранить..." : "Сохранить"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
