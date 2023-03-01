import React from "react";

function FormValues() {
  /* crea aquí un hook para la variable `deeds` */
  const [valor, setValues] = React.useState([]);

  function handleAddTask(e) {
    const input = e.target.previousSibling;

    /* aquí pasarás al setter un array con un nuevo elemento
    desde `input.value` */
    setValues([...valor, input.value]);

    input.value = "";
  }
}

function PopupWithForm(props) {
  return (
    <>
      {console.log(props)}
      <div className={`popup popup_type-${props.name}`}>
        <div className="popup__container popup__container_function-form">
          <form className="form popup__form" novalidate name={props.name}>
            <fieldset class="form__fields form__set">
              <h2 class="form__heading">{props.title}</h2>
              {props.children}
              <button
                class="form__Button form__submit popup__button pointer"
                type="submit"
              >
                {props.action}
              </button>
            </fieldset>
          </form>
          <button className="close-button pointer" type="button"></button>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
