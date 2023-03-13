import React, { useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { UserContext } from "../contexts/UserContext";
import Card from "./Card";

export default function DeleteCardForm(props) {
  const { onClose, onEraseCard } = props;

  return (
    <PopupWithForm
      title="¿Estás seguro?"
      action="Sí"
      onSubmit={onEraseCard}
      inputs={[]}
      onClose={onClose}
    />
  );
}
