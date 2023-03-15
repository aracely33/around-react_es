import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function UpdateProfileForm(props) {
  const {
    onUpdateUser,
    onUserNameChange,
    onUserDescriptionChange,
    setUserName,
    setUserDescription,
    name,
    about,
  } = props;

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: about,
    });
  }

  return (
    <PopupWithForm
      title="Editar Perfil"
      action="Guardar"
      onClose={props.onClose}
      onSubmit={handleSubmit}
      inputs={[
        {
          type: "text",
          placeholder: "Nombre",
          name: "name",
          id: "form__input form__input_info-name popup__input",
          minLength: "2",
          maxLength: "40",
          value: name || "",
          onChange: onUserNameChange,
        },
        {
          type: "text",
          placeholder: "Acerca de mi",
          name: "about",
          id: "form__input form__input_info-occupation popup__input",
          minLength: "2",
          maxLength: "200",
          value: about || "",
          onChange: onUserDescriptionChange,
        },
      ]}
    />
  );
}
