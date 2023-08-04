import { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [isOpen, currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name={"editPopup"}
      title={"Редактировать профиль"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
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
          onChange={handleChangeName}
          value={name}
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
          onChange={handleChangeDescription}
          value={description}
        />
        <span className="popup__input-error jobInput-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
