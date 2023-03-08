import React from "react";

function ImagePopup(props) {
  const { imagePopup, onClose } = props;
  console.log(props);

  console.log(imagePopup.props);
  return (
    <div className="popup popup_type-image">
      <div className="popup__container popup__container_function-image">
        <button
          type="button"
          className="close-button pointer"
          onClick={onClose}
        ></button>
        <img src=" " alt="descripción de la imagen" className="popup__image" />
        <p className="popup__imagedescription"></p>
      </div>
    </div>
  );
}

export default ImagePopup;
