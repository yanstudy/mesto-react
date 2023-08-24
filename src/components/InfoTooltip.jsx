import pictureForSuccess from "../images/success.svg";
import pictureForError from "../images/notsuccess.svg";

export default function InfoTooltip(props) {
  return (
    <section
      className={`popup ${props.isOpen ? "popup_opened" : ""}`}
      id={`${props.name}`}
    >
      <div className="popup__image-container">
        <button
          className="popup__close-icon popup__close-icon_pict"
          type="button"
          aria-label="Кнопка закрытия попапа"
          onClick={props.onClose}
        ></button>
        <div className="info-tool">
          <img
            src={props.success ? pictureForSuccess : pictureForError}
            alt=""
            className="info-tool__success"
          />
          <h2 className="info-tool__message">
            {props.success
              ? "Вы успешно зарегистрировались!"
              : "Что-то пошло не так! Попробуйте ещё раз."}
          </h2>
        </div>
      </div>
    </section>
  );
}
