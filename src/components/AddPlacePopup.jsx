import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [nameOfPlace, setNameOfPlace] = useState("");
  const [linkOfPlace, setLinkOfPlace] = useState("");

  function handleChangeNameOfPlace(e) {
    setNameOfPlace(e.target.value);
  }

  function handleChangeLinkOfPlace(e) {
    setLinkOfPlace(e.target.value);
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: nameOfPlace,
      link: linkOfPlace,
    });
  }

  useEffect(() => {
    if (isOpen) {
      setNameOfPlace("");
      setLinkOfPlace("");
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name={"newPlacePopup"}
      title={"Новое место"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
      isLoading={isLoading}
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
          onChange={handleChangeNameOfPlace}
          value={nameOfPlace}
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
          onChange={handleChangeLinkOfPlace}
          value={linkOfPlace}
        />
        <span className="popup__input-error placeInput-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
