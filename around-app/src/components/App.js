import React from "react";
import { UserContext } from "../contexts/UserContext";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";
import DeleteCardForm from "./DeleteCardForm";
import api from "../utils/api";
import ImagePopup from "./ImagePopup";
import Card from "./Card";
import UpdateProfileForm from "./UpdateProfileForm";
import ChangeAvatarForm from "./ChangeAvatarForm";
import AddPlaceForm from "./AddPlaceForm";

function App(props) {
  const [isAvatarProfilePopupOpen, setAvatarProfilePopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );

  /////
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [newPlaceLink, setNewPlaceLink] = React.useState("");
  const [newPlaceTitle, setNewPlaceTitle] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  ///////////
  const [imagePic, setImagePic] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [eraseCardAsk, setEraseCardAsk] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const [userAvatar, setUserAvatar] = React.useState("");
  //const [newAvatarLink, setNewAvatarLink] = React.useState({});
  const [cards, setCards] = React.useState([]);
  ////////

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((info) => {
        setCurrentUser(info);
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
      })
      .catch((err) => console.error(err));
  }, []);

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

      return (
        <Card
          key={_id}
          cardId={_id}
          cardOwnerId={owner._id}
          link={link}
          cardName={name}
          cardLikes={likes}
          onCardClick={handleCardClick}
          onDeleteCardAsk={handleEraseAsk}
        />
      );
    });

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setAvatarProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePic(true);
  }

  function handleEraseAsk(card) {
    setEraseCardAsk(true);
    setSelectedCard(card);
  }
  /////cambiar avatar

  function handleChangeAvatar(data) {
    console.log(data);
    api
      .handleChangeAvatar(data)
      .then((data) => setCurrentUser(data))
      .catch((err) => console.error(err));
    closeAllPopups();
  }
  /////Modificar el Profile///
  function handleUpdateUser(data) {
    api
      .handleEditProfile(data)
      .then((res) => {
        api
          .getUserInfo()
          .then((info) => {
            setCurrentUser(info);
            setUserName(info.name);
            setUserDescription(info.about);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
    closeAllPopups();
  }

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  function handleUserDescriptionChange(e) {
    setUserDescription(e.target.value);
  }

  /////////Agregar un nuevo Lugar//////
  function handleAddPlaceSubmit(data) {
    api
      .handleAddCard(data)
      .then((newCard) => setCards([newCard, ...cards]))
      .catch((err) => console.error(err));
    closeAllPopups();
  }
  function handleNewPlaceCaptionChange(e) {
    setNewPlaceTitle(e.target.value);
  }

  function handleNewPlaceChange(e) {
    setNewPlaceLink(e.target.value);
  }

  /////////////////////////////////
  function handleDeleteCard(card) {
    console.log("delete card", card);
    api
      .handleDeleteCard(card.cardId)
      .then((deletedCardId) => {
        return api.getInitialCards();
      })
      .then((data) => setCards(data))
      .catch((err) => console.error(err));

    closeAllPopups();
  }

  function closeAllPopups() {
    setAvatarProfilePopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard("");
    setImagePic(false);
    setEraseCardAsk(false);
  }

  return (
    <>
      <UserContext.Provider value={currentUser}>
        <Header></Header>
        <Main
          onEditProfileClick={handleEditProfileClick}
          onEditAvatarClick={handleEditAvatarClick}
          onAddPlaceClick={handleAddPlaceClick}
          renderCards={renderCards}
        ></Main>
        <Footer></Footer>

        <Popup isOpen={eraseCardAsk}>
          <DeleteCardForm
            card={selectedCard}
            onEraseCard={handleDeleteCard}
            onClose={closeAllPopups}
          ></DeleteCardForm>
        </Popup>

        <Popup isOpen={isEditProfilePopupOpen}>
          <UpdateProfileForm
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            onUserNameChange={handleUserNameChange}
            onUserDescriptionChange={handleUserDescriptionChange}
            setUserDescription={setUserDescription}
            setUserName={setUserName}
            name={userName}
            about={userDescription}
          ></UpdateProfileForm>
        </Popup>

        <Popup isOpen={isAvatarProfilePopupOpen}>
          <ChangeAvatarForm
            onClose={closeAllPopups}
            onUpdateAvatar={handleChangeAvatar}
            // userAvatar={userAvatar}
            //newAvatarLink={newAvatarLink}
            //onNewAvatarLinkChange={handleNewAvatarLinkChange}
          ></ChangeAvatarForm>
        </Popup>

        <Popup isOpen={imagePic}>
          <ImagePopup
            cardInfoPopup={selectedCard}
            onClose={closeAllPopups}
          ></ImagePopup>
        </Popup>

        <Popup isOpen={isAddPlacePopupOpen}>
          <AddPlaceForm
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
            onNewPlaceTitleChange={handleNewPlaceCaptionChange}
            onNewPlaceLinkChange={handleNewPlaceChange}
            newPlaceLink={newPlaceLink}
            newPlaceTitle={newPlaceTitle}
            setNewPlaceLink={setNewPlaceLink}
            setNewPlaceTitle={setNewPlaceTitle}
            name={userName}
            about={userDescription}
          ></AddPlaceForm>
        </Popup>
      </UserContext.Provider>
    </>
  );
}

export default App;
