import React, { useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { UserContext } from "../contexts/UserContext";

export default function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef(currentUser.avatar);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Cambiar foto de perfil"
      submitText="Guardar"
      onSubmit={handleSubmit}
      inputs={[
        {
          type: "url",
          placeholder: "Enlace a la imagen",
          name: "avatar",
          id: "profile-pic",
          ref: avatarRef,
          value: undefined,
        },
      ]}
    />
  );
}
