import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function ChangeAvatarForm(props) {
  const {
    onNewAvatarLinkChange,
    newAvatarLink,
    onUpdateAvatar,
    setNewAvatarLink,
  } = props;

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ newAvatarLink });
    setNewAvatarLink("");
  }

  return (
    <PopupWithForm
      title="Cambiar foto de perfil"
      action=" Guardar"
      onSubmit={handleSubmit}
      onClose={props.onClose}
      inputs={[
        {
          type: "url",
          placeholder: "Enlace a la imagen",
          name: "avatar",
          id: "form__input form__input_new-avatar-url popup__input",
          onChange: onNewAvatarLinkChange,

          value: newAvatarLink,
        },
      ]}
    />
  );
}
