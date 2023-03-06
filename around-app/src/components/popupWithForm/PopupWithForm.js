import React from "react";
import Popup from "../popup/Popup";

function PopupWithForm(props) {
  return (
    <>
      <div className="popup__container popup__container_function-form">
        <form className="form popup__form" novalidate name={props.name}>
          <fieldset className="form__fields form__set">
            <h2 className="form__heading">{props.title}</h2>
            {props.children}
            <button
              className="form__Button form__submit popup__button pointer"
              type="submit"
            >
              {props.action}
            </button>
          </fieldset>
        </form>
        <button className="close-button pointer" type="button"></button>
      </div>
    </>
  );
}

export default PopupWithForm;
