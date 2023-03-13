import React, { useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { UserContext } from "../contexts/UserContext";

export default function UpdateProfileForm(props) {
  const {
    onClose,
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
      name,
      about,
    });
  }

  const currentUser = React.useContext(UserContext);

  /*
  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserDescription(currentUser.about);
  }, [currentUser]);*/

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
          name: "nombre",
          id: "form__input form__input_info-name popup__input",
          minLength: "2",
          maxLength: "40",
          value: name || "",
          onChange: onUserNameChange,
        },
        {
          type: "text",
          placeholder: "Acerca de mi",
          name: "ocupación",
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
