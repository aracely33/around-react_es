import React, { useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { UserContext } from "../contexts/UserContext";
import Card from "./Card";

export default function DeleteCardForm(props) {
  const { isOpen, onClose, onEraseCard } = props;

  //console.log(props);
  /*function handleSubmit(e) {
    e.preventDefault();
    onEraseCard
  }*/
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
