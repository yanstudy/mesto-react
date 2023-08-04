import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarInput = useRef();

  function handleSubmit(e) {
    onUpdateAvatar(avatarInput.current.value);
  }

  useEffect(() => {
    if (isOpen) {
      avatarInput.current.value = "";
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name={"editAvatar"}
      title={"Обновить аватар"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <div className="popup__input-wrapper">
        <input
          type="url"
          className="popup__input"
          id="linkOfAvatarInput"
          name="link"
          placeholder="Введите ссылку на новый аватар"
          required
          ref={avatarInput}
        />
        <span className="popup__input-error linkOfAvatarInput-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
