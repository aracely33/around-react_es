import React from "react";

import "./Main.css";

function Main(props) {
  const {
    onEditAvatarClick,
    onEditProfileClick,
    onAddPlaceClick,
    onCardClick,
  } = props;

  return (
    <>
      <div className="main">
        <div className="profile">
          <div className="profile__avatar-container">
            <button
              className="profile__avatar-edit-button"
              type="button"
              onClick={onEditAvatarClick}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__info-edit">
              <p className="profile__info-name">Jaques Costeau</p>
              <button
                type="button"
                className="profile__info-edit-button pointer"
                onClick={onEditProfileClick}
              ></button>
            </div>
            <p className="profile__info-occupation">traveler</p>
          </div>

          <div className="profile__button-container">
            <button
              type="button"
              className="profile__add-button pointer"
              onClick={onAddPlaceClick}
            ></button>
          </div>
        </div>
        <div className="gallery"></div>
      </div>
    </>
  );
}

export default Main;
