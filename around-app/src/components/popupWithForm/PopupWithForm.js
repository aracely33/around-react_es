import React from "react";

function popupWithForm(props) {
  return (
    <>
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
    </>
  );
}

export default popupWithForm;
