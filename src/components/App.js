import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick(e) {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick(e) {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick(e) {
    setAddPlacePopupOpen(true);
  }

  function handleDeleteCardClick(e) {
    setDeleteCardPopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setDeleteCardPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onDeleteCard={handleDeleteCardClick}
        handleCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name={"editPopup"}
        title={"Редактировать профиль"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}
      ></PopupWithForm>
      <PopupWithForm
        name={"editAvatar"}
        title={"Обновить аватар"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen}
      />
    </div>
  );
}

export default App;
