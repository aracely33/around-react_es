import React from "react";
import Main from "./around_main/Main";
import Header from "./around_header/Header";
import Footer from "./footer/Footer";
import Popup from "./popup/Popup";
import PopupWithForm from "./popupWithForm/PopupWithForm";
import ImagePopup from "./imagePopup/ImagePopup";
import Card from "./card/Card";

function App(props) {
  const [isAvatarProfilePopupOpen, setAvatarProfilePopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [imagePic, setImagePic] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState("");

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setAvatarProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePic(true);
  }

  function closeAllPopups() {
    setAvatarProfilePopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard("");
    setImagePic(false);
  }

  return (
    <>
      <Header></Header>
      <Main
        onEditProfileClick={handleEditProfileClick}
        onEditAvatarClick={handleEditAvatarClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
      ></Main>
      <Footer></Footer>
      <Popup isOpen={isEditProfilePopupOpen}>
        <PopupWithForm
          name="form-new-profile"
          title="Editar perfil"
          action="Guardar"
          onClose={closeAllPopups}
        >
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input_info-name popup__input"
              placeholder="Nombre"
              name="nombre"
              id="nombre"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="popup__error nombre-error"></span>
          </div>
          <div className="form__field">
            <input
              type="text"
              className="form__input form__input_info-occupation popup__input"
              placeholder="Acerca de mi"
              name="ocupación"
              id="ocupación"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__error ocupación-error"></span>
          </div>
        </PopupWithForm>
      </Popup>
      <Popup isOpen={isAvatarProfilePopupOpen}>
        <PopupWithForm
          name="form-change-profile-avatar"
          title="Cambiar foto de perfil"
          action=" Guardar"
          onClose={closeAllPopups}
        >
          <div className="form__field">
            <input
              id="avatar"
              className="form__input form__input_new-avatar-url popup__input"
              placeholder="Enlace a la imagen del avatar"
              name="avatar"
              type="url"
              required
            />
            <span className="popup__error avatar-error"></span>
          </div>
        </PopupWithForm>
      </Popup>

      <Popup isOpen={isAddPlacePopupOpen}>
        <PopupWithForm
          name="form-new-place"
          title="Nuevo lugar"
          action="Crear"
          onClose={closeAllPopups}
        >
          <div className="form__field">
            <input
              type="text"
              id="title"
              className="form__input form__input_newplace-title popup__input"
              placeholder="Título"
              name="title"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="popup__error title-error"></span>
          </div>
          <div className="form__field">
            <input
              id="image"
              className="form__input form__input_newplace-url popup__input"
              placeholder="Enlace a la imagen"
              name="image"
              type="url"
              required
            />
            <span className="popup__error image-error"></span>
          </div>
        </PopupWithForm>
      </Popup>
      <Popup isOpen={imagePic}>
        <ImagePopup
          imagePopup={selectedCard}
          onClose={closeAllPopups}
        ></ImagePopup>
      </Popup>
    </>
  );
}

export default App;

/*      

      <PopupWithForm
        name="form-delete-card-ask"
        title=" ¿Estás seguro?"
        action="Sí"
      ></PopupWithForm>
 

      <ImagePopup></ImagePopup>*/
