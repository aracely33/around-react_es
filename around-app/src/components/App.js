import React from "react";
import Main from "./around_main/Main";
import Header from "./around_header/Header";
import Footer from "./footer/Footer";
import Popup from "./popup/Popup";
import PopupWithForm from "./popupWithForm/PopupWithForm";

function App(props) {
  const [isAvatarProfilePopupOpen, setAvatarProfilePopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
    //console.log(isEditProfilePopupOpen);
  }
  function handleEditAvatarClick() {
    setAvatarProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(e) {
    console.log(e.target);
  }

  function closeAllPopups() {
    setAvatarProfilePopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
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
          <div class="form__field">
            <input
              type="text"
              class="form__input form__input_info-name popup__input"
              placeholder="Nombre"
              name="nombre"
              value="Jaques Costeau"
              id="nombre"
              required
              minlength="2"
              maxlength="40"
            />
            <span class="popup__error nombre-error"></span>
          </div>
          <div class="form__field">
            <input
              type="text"
              class="form__input form__input_info-occupation popup__input"
              placeholder="Acerca de mi"
              name="ocupación"
              value="Explorer"
              id="ocupación"
              required
              minlength="2"
              maxlength="200"
            />
            <span class="popup__error ocupación-error"></span>
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
          <div class="form__field">
            <input
              id="avatar"
              class="form__input form__input_new-avatar-url popup__input"
              placeholder="Enlace a la imagen del avatar"
              name="avatar"
              type="url"
              value=""
              required
            />
            <span class="popup__error avatar-error"></span>
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
          <div class="form__field">
            <input
              type="text"
              id="title"
              class="form__input form__input_newplace-title popup__input"
              placeholder="Título"
              name="title"
              value=""
              required
              minlength="2"
              maxlength="30"
            />
            <span class="popup__error title-error"></span>
          </div>
          <div class="form__field">
            <input
              id="image"
              class="form__input form__input_newplace-url popup__input"
              placeholder="Enlace a la imagen"
              name="image"
              type="url"
              value=""
              required
            />
            <span class="popup__error image-error"></span>
          </div>
        </PopupWithForm>
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
