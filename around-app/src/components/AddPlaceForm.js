import React, { useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { UserContext } from "../contexts/UserContext";

export default function AddPlaceForm(props) {
  const {
    onClose,
    onAddPlaceSubmit,
    onNewPlaceCaptionChange,
    onNewPlaceChange,
    newPlace,
    newPlaceCaption,
    setNewPlace,
    setNewPlaceCaption,
  } = props;

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ newPlaceCaption, newPlace });
    setNewPlace("");
    setNewPlaceCaption("");
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
          onChange: onNewPlaceCaptionChange,
          value: newPlaceCaption,
        },
        {
          type: "url",
          placeholder: "Enlace a la imagen",
          name: "newPlace",
          id: "popup__input_new-place-pic",
          onChange: onNewPlaceChange,
          value: newPlace,
        },
      ]}
    />
  );
}
