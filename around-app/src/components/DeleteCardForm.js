import React from "react";
import PopupWithForm from "./PopupWithForm";
import { UserContext } from "../contexts/UserContext";

export default function DeleteCardForm(props) {
  const { onClose, onEraseCard } = props;

  const currentUser = React.useContext(UserContext);
  //console.log(currentUser);
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
