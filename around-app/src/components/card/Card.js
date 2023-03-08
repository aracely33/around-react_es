import React from "react";
function Card(props) {
  const {
    cardOwnerId,
    link,
    cardName,
    cardLikes,
    onCardClick,
    onCardLike,
    onCardDelete,
  } = props;
  console.log(card);
  /*
function handleClick() {
  props.onCardClick(props.card);
}*/

  return (
    <div className="item">
      <button
        type="button"
        className="item__trash-button"
        onClick={onCardDelete}
      ></button>
      <img
        className="item__place"
        src={link}
        alt={cardName}
        onClick={onCardClick}
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
