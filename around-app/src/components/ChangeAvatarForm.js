import React from "react";
import PopupWithForm from "./PopupWithForm";
import { UserContext } from "../contexts/UserContext";

export default function ChangeAvatarForm(props) {
  const { onUpdateAvatar } = props;

  const currentUser = React.useContext(UserContext);
  const avatarRef = React.useRef(currentUser.avatar);
  console.log(currentUser);
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: "holi",
      //avatar: props.userAvatar.current.value,
    });
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
          //onChange: onNewAvatarLinkChange,
          ref: avatarRef,
          //value: newAvatarLink,
          value: undefined,
        },
      ]}
    />
  );
}
