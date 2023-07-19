import PopupWithForm from "./PopupWithForm ";
import { useState, useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card";
import ImagePopup from "./ImagePopup";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
    api.getInitialCards().then((cards) => setCards(cards));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar"
          onClick={props.onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        ></div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Кнопка редактирования"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__job">{userDescription}</p>
        </div>

        <button
          className="profile__add-button"
          type="button"
          aria-label="Кнопка добавления фотографии"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements"></section>

      <section className="popup popup_dark" id="imagePopup">
        <div className="popup__image-container">
          <button
            className="popup__close-icon popup__close-icon_pict"
            type="button"
            aria-label="Кнопка закрытия попапа"
          ></button>
          <img src="#" alt="#" className="popup__image" />
          <p className="popup__title"></p>
        </div>
      </section>

      <PopupWithForm
        name={"editPopup"}
        title={"Редактировать профиль"}
        isOpen={props.isEditProfilePopupOpen}
        onClose={props.onClosePopup}
      >
        <div className="popup__input-wrapper">
          <input
            type="text"
            className="popup__input"
            id="nameInput"
            name="nameInput"
            placeholder="Введите имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error nameInput-error"></span>
        </div>
        <div className="popup__input-wrapper">
          <input
            type="text"
            className="popup__input"
            id="jobInput"
            name="jobInput"
            placeholder="Чем вы занимаетесь?"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error jobInput-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name={"newPlacePopup"}
        title={"Новое место"}
        isOpen={props.isAddPlacePopupOpen}
        onClose={props.onClosePopup}
      >
        <div className="popup__input-wrapper">
          <input
            type="text"
            className="popup__input"
            id="nameOfPlaceInput"
            name="name"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error nameOfPlaceInput-error"></span>
        </div>
        <div className="popup__input-wrapper">
          <input
            type="url"
            className="popup__input"
            id="placeInput"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error placeInput-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        name={"deletePopup"}
        title={"Вы уверены?"}
        isOpen={props.isDeleteCardPopupOpen}
        onClose={props.onClosePopup}
      ></PopupWithForm>
      <PopupWithForm
        name={"editAvatar"}
        title={"Обновить аватар"}
        isOpen={props.isEditAvatarPopupOpen}
        onClose={props.onClosePopup}
      >
        <div className="popup__input-wrapper">
          <input
            type="url"
            className="popup__input"
            id="linkOfAvatarInput"
            name="link"
            placeholder="Введите ссылку на новый аватар"
            required
          />
          <span className="popup__input-error linkOfAvatarInput-error"></span>
        </div>
      </PopupWithForm>

      <div className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.handleCardClick}
            />
          );
        })}
      </div>
      <ImagePopup
        card={props.selectedCard}
        onClose={props.onClosePopup}
        isOpen={props.isImagePopupOpen}
      />
    </main>
  );
}

export default Main;
