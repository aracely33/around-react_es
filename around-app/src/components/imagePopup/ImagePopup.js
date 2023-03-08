import React from "react";

function ImagePopup(props) {
  const { cardInfoPopup, onClose } = props;
  //console.log(`${cardInfoPopup.link}`);
  console.log(cardInfoPopup);

  return (
    <div className="popup__container popup__container_function-image">
      <button
        type="button"
        className="close-button pointer"
        onClick={onClose}
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
