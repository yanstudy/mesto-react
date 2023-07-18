import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
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
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);

    setImagePopupOpen(true);
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          isImagePopupOpen={isImagePopupOpen}
          onClosePopup={closeAllPopups}
          selectedCard={selectedCard}
          handleCardClick={handleCardClick}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;