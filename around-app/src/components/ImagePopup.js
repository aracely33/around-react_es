import React from "react";

function ImagePopup(props) {
  const { cardInfoPopup } = props;

  return (
    <div className="popup__container popup__container_function-image">
      <button
        type="button"
        className="close-button pointer"
        onClick={props.onClose}
      ></button>
      <img
        src={cardInfoPopup.link}
        alt={cardInfoPopup.cardName}
        className="popup__image"
      />
      <p className="popup__imagedescription">{cardInfoPopup.cardName}</p>
    </div>
  );
}

export default ImagePopup;
