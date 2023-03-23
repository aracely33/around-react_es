import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function DeleteCardForm(props) {
  const { onClose, onEraseCard } = props;

  function handleSubmit(e) {
    e.preventDefault();

    onEraseCard(props.card);
  }

  return (
    <PopupWithForm
      title="¿Estás seguro?"
      action="Sí"
      onSubmit={handleSubmit}
      inputs={[]}
      onClose={onClose}
    />
  );
}
