import React from "react";
import { UserContext } from "../contexts/UserContext";

function Card(props) {
  const {
    cardOwnerId,
    link,
    cardName,
    cardLikes,
    onCardClick,
    onCardLike,
    onEraseCard,
    onDeleteCardAsk,
  } = props;

  const currentUser = React.useContext(UserContext);
  console.log(currentUser);
  const isOwn = cardOwnerId === currentUser._id;
  /* const cardButtonDeleteStyle = isOwn
    ? { display: "block" }
    : { display: "none" };
  const isLiked = cardLikes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = isLiked
    ? "cards__like-btn cards__like-btn_active"
    : "cards__like-btn";
*/

  function handleClick() {
    props.onCardClick(props);
  }

  function handleAskDelete() {
    props.onDeleteCardAsk(props);
  }

  return (
    <div className="item">
      <button
        type="button"
        className="item__trash-button"
        onClick={handleAskDelete}
      ></button>
      <img
        className="item__place"
        src={link}
        alt={cardName}
        onClick={handleClick}
      />
      <div className="item__place-info">
        <div className="item__place-info-container">
          <p className="item__place-info-name">{cardName}</p>
          <div className="item__likes-container">
            <button
              type="button"
              className="item__place-like-button pointer"
              onClick={onCardLike}
            ></button>
            <p className="item__likes-number">{cardLikes.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
