import React from "react";
import PopupWithForm from "../popupWithForm/PopupWithForm";
import "./Main.css";

function handleEditAvatarClick(e) {
  document
    .querySelector(".popup_type-form-change-profile-avatar")
    .classList.add("popup_opened");
}

function handleAddPlaceClick(e) {
  document
    .querySelector(".popup_type-form-new-place")
    .classList.add("popup_opened");
}

function handleEditProfileClick(e) {
  document
    .querySelector(".popup_type-form-new-profile")
    .classList.add("popup_opened");
}

function Main(props) {
  return (
    <>
      <div className="main">
        <div className="profile">
          <div className="profile__avatar-container">
            <button
              className="profile__avatar-edit-button"
              onClick={handleEditAvatarClick}
              type="button"
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__info-edit">
              <p className="profile__info-name">Jaques Costeau</p>
              <button
                type="button"
                className="profile__info-edit-button pointer"
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p className="profile__info-occupation">traveler</p>
          </div>

          <div className="profile__button-container">
            <button
              type="button"
              className="profile__add-button pointer"
              onClick={handleAddPlaceClick}
            ></button>
          </div>
        </div>
        <div className="gallery"></div>
      </div>
      <PopupWithForm
        name="form-new-profile"
        title="Editar perfil"
        action="Guardar"
      >
        <input
          type="text"
          className="form__input form__input_info-name popup__input"
          placeholder="Nombre"
          name="nombre"
          value="Jaques Costeau"
          id="nombre"
          required
          minlength="2"
          maxlength="40"
        />
        <span className="popup__error nombre-error"></span>
        <div className="form__field">
          <input
            type="text"
            className="form__input form__input_info-occupation popup__input"
            placeholder="Acerca de mi"
            name="ocupación"
            value="Explorer"
            id="ocupación"
            required
            minlength="2"
            maxlength="200"
          />
          <span className={`popup__error ocupación-error`}></span>
        </div>
      </PopupWithForm>

      <PopupWithForm name="form-new-place" title="Nuevo lugar" action="Crear" />
      <PopupWithForm
        name="form-delete-card-ask"
        title=" ¿Estás seguro?"
        action="Sí"
      />
      <PopupWithForm
        name="form-change-profile-avatar"
        title="Cambiar foto de perfil"
        action=" Guardar"
      />

      <div className="popup popup_type-image">
        <div className="popup__container popup__container_function-image">
          <button type="button" className="close-button pointer"></button>
          <img
            src=" "
            alt="descripción de la imagen"
            className="popup__image"
          />
          <p className="popup__imagedescription"></p>
        </div>
      </div>
    </>
  );
}

export default Main;
