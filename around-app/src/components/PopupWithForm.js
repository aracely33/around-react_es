import React from "react";
import Popup from "./Popup";

function PopupWithForm(props) {
  const { onClose, action, inputs, onSubmit } = props;

  return (
    <>
      <div className="popup__container popup__container_function-form">
        <form className="form popup__form" noValidate name={props.name}>
          <fieldset className="form__fields form__set">
            <h2 className="form__heading">{props.title}</h2>
            <div className="form__field">
              {inputs.map(
                ({
                  type,
                  placeholder,
                  name,
                  id,
                  minLength,
                  maxLength,
                  onChange,
                  value,
                  ref,
                }) => {
                  return (
                    <React.Fragment key={id}>
                      <input
                        type={type}
                        className="form__input form__input_info-name popup__input"
                        placeholder={placeholder}
                        name={name}
                        id={id}
                        minLength={minLength || null}
                        maxLength={maxLength || null}
                        onChange={onChange ? (e) => onChange(e) : null}
                        ref={ref || null}
                        value={value || value === "" ? value : undefined}
                        required
                      />
                      <span className="popup__error nombre-error"></span>
                    </React.Fragment>
                  );
                }
              )}
            </div>
            <button
              className="form__Button form__submit popup__button pointer"
              type="submit"
              onClick={(e) => onSubmit(e)}
            >
              {action}
            </button>
          </fieldset>
        </form>
        <button
          className="close-button pointer"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </>
  );
}

export default PopupWithForm;
