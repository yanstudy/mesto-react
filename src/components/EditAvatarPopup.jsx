import { useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatar = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatar.current.value);
  }

  return (
    <PopupWithForm
      name={"editAvatar"}
      title={"Обновить аватар"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-wrapper">
        <input
          type="url"
          className="popup__input"
          id="linkOfAvatarInput"
          name="link"
          placeholder="Введите ссылку на новый аватар"
          required
          ref={avatar}
        />
        <span className="popup__input-error linkOfAvatarInput-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
