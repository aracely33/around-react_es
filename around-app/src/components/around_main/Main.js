import React from "react";
import api from "../../utils/api";
import Card from "../card/Card";

import "./Main.css";

function Main(props) {
  const {
    onEditAvatarClick,
    onEditProfileClick,
    onAddPlaceClick,
    onCardClick,
    onDeleteCardAsk,
  } = props;

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState(
    "https://media.istockphoto.com/id/1434414228/es/foto/gato-triste-severo-aislado-sobre-fondo-blanco.jpg?b=1&s=170667a&w=0&k=20&c=aCW9PET915TnFZgylPXMxsk6Lz_4nYcSDPDqovDItr4="
  );
  const [cards, setCards] = React.useState([]);
  ////////
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((info) => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
      })
      .catch((err) => console.error(err));
  });

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.error(err));
  }, []);

  const renderCards = () =>
    cards.map((card) => {
      const { _id, owner, link, name, likes } = card;
      //console.log(card);
      return (
        <Card
          key={_id}
          cardId={_id}
          cardOwnerId={owner._id}
          link={link}
          cardName={name}
          cardLikes={likes}
          onCardClick={onCardClick}
          onDeleteCardAsk={onDeleteCardAsk}
        />
      );
    });

  return (
    <>
      <div className="main">
        <div className="profile">
          <div
            className="profile__avatar-container"
            style={{ backgroundImage: `url(${userAvatar})` }}
          >
            <button
              className="profile__avatar-edit-button"
              type="butt on"
              onClick={onEditAvatarClick}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__info-edit">
              <p className="profile__info-name">{userName}</p>
              <button
                type="button"
                className="profile__info-edi t-button pointer"
                onClick={onEditProfileClick}
              ></button>
            </div>
            <p className="profile__info-occupation">{userDescription}</p>
          </div>

          <div className="profile__button-container">
            <button
              type="button"
              className="profile__add-button pointer"
              onClick={onAddPlaceClick}
            ></button>
          </div>
        </div>
        <div className="gallery">{renderCards()}</div>
      </div>
    </>
  );
}

export default Main;
