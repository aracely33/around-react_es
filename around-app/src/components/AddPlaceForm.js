import React from "react";
import PopupWithForm from "./PopupWithForm";
//import { UserContext } from "../contexts/UserContext";

export default function AddPlaceForm(props) {
  const {
    onClose,
    onAddPlaceSubmit,
    onNewPlaceTitleChange,
    onNewPlaceLinkChange,
    newPlaceLink,
    newPlaceTitle,
    setNewPlaceLink,
    setNewPlaceTitle,
  } = props;

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ newPlaceTitle, newPlaceLink });
    setNewPlaceLink("");
    setNewPlaceTitle("");
  }
  return (
    <PopupWithForm
      title="Nuevo lugar"
      action="Guardar"
      onClose={onClose}
      onSubmit={handleSubmit}
      inputs={[
        {
          type: "text",
          placeholder: "Título",
          name: "newPlaceCaption",
          id: "popup__input_new-place-title",
          minLength: "2",
          maxLength: "30",
          onChange: onNewPlaceTitleChange,
          value: newPlaceTitle,
        },
        {
          type: "url",
          placeholder: "Enlace a la imagen",
          name: "newPlace",
          id: "popup__input_new-place-pic",
          onChange: onNewPlaceLinkChange,
          value: newPlaceLink,
        },
      ]}
    />
  );
}
