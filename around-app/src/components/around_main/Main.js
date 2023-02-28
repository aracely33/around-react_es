import React from "react";

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

function Main() {
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
      <div className="popup popup_type-form-new-profile">
        <div className="popup__container popup__container_function-form">
          <form className="form popup__form" novalidate name="form">
            <fieldset className="form__fields form__set">
              <h2 className="form__heading">Editar perfil</h2>
              <div className="form__field">
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
              </div>
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
                <span className="popup__error ocupación-error"></span>
              </div>

              <button
                className="form__Button form__submit popup__button pointer"
                type="submit"
              >
                Guardar
              </button>
            </fieldset>
          </form>
          <button className="close-button pointer" type="button"></button>
        </div>
      </div>
      <div className="popup popup_type-form-new-place">
        <div className="popup__container popup__container_function-form">
          <form
            className="form form_newplace popup__form"
            novalidate
            name="formPlace"
          >
            <fieldset className="form__fields form__set">
              <h2 className="form__heading">Nuevo lugar</h2>
              <div className="form__field">
                <input
                  type="text"
                  id="title"
                  className="form__input form__input_newplace-title popup__input"
                  placeholder="Título"
                  name="title"
                  value=""
                  required
                  minlength="2"
                  maxlength="30"
                />
                <span className="popup__error title-error"></span>
              </div>
              <div className="form__field">
                <input
                  id="image"
                  class="form__input form__input_newplace-url popup__input"
                  placeholder="Enlace a la imagen"
                  name="image"
                  type="url"
                  value=""
                  required
                />
                <span className="popup__error image-error"></span>
              </div>
              <button
                className="form__Button form__submit popup__button pointer"
                type="submit"
              >
                Crear
              </button>
            </fieldset>
          </form>
          <button className="close-button pointer" type="button"></button>
        </div>
      </div>
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
      <div className="popup popup_type-form-delete-card-ask">
        <div class="popup__container popup__container_function-delete-card-popup">
          <form
            className="form form_delete-place popup__form"
            novalidate
            name="formDeletePlace"
          >
            <fieldset className="form__fields form__set">
              <h2 className="form__heading form__heading_type-form-delete-card">
                ¿Estás seguro?
              </h2>
              <button
                className="form__Button form__submit popup__button pointer"
                type="submit"
              >
                Sí
              </button>
            </fieldset>
          </form>
          <button className="close-button pointer" type="button"></button>
        </div>
      </div>
      <div className="popup popup_type-form-change-profile-avatar">
        <div className="popup__container popup__container_function-change-profile-avatar">
          <form
            className="form form_change-profile-avatar popup__form"
            novalidate
            name="formChangeAvatar"
          >
            <fieldset className="form__fields form__set">
              <h2 className="form__heading">Cambiar foto de perfil</h2>
              <div className="form__field">
                <input
                  id="avatar"
                  className="form__input form__input_new-avatar-url popup__input"
                  placeholder="Enlace a la imagen del avatar"
                  name="avatar"
                  type="url"
                  value=""
                  required
                />
                <span className="popup__error avatar-error"></span>
              </div>
              <button
                className="form__Button form__submit popup__button pointer"
                type="submit"
              >
                Guardar
              </button>
            </fieldset>
          </form>
          <button class="close-button pointer" type="button"></button>
        </div>
      </div>
    </>
  );
}

export default Main;
