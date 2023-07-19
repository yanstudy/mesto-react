import { useState, useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .getInitialCards()
      .then((cards) => setCards(cards))
      .catch((err) => {
        console.log(err);
      });
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
    </main>
  );
}

export default Main;
