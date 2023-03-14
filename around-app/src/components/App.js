import React from "react";
import { UserContext } from "../contexts/UserContext";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";
import PopupWithForm from "./PopupWithForm";
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
  const [selectedCard, setSelectedCard] = React.useState("");
  const [eraseCardAsk, setEraseCardAsk] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const [userAvatar, setUserAvatar] = React.useState(
    "https://media.istockphoto.com/id/1434414228/es/foto/gato-triste-severo-aislado-sobre-fondo-blanco.jpg?b=1&s=170667a&w=0&k=20&c=aCW9PET915TnFZgylPXMxsk6Lz_4nYcSDPDqovDItr4="
  );
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
        console.log(cards);
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
    setCurrentUser(card); //quizá aquí esté la falla
  }
  function handleChangeAvatar(data) {
    api
      .handleChangeAvatar(data)
      .then((data) => setCurrentUser(data))
      .catch((err) => console.error(err));
    closeAllPopups();
  }
  /////Modificar el Profile
  function handleUpdateUser(data) {
    console.log("me vas a cambiar?");
    console.log(data);
    api
      .handleEditProfile(data)
      .then((data) => setCurrentUser(data))
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
    console.log(card);
    api
      .handleDeleteCard(card.cardId)
      .then((deletedCardId) => {
        console.log(deletedCardId);
      })
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

/*      




      <Popup isOpen={isAddPlacePopupOpen}>
        <PopupWithForm
          name="form-new-place"
          title="Nuevo lugar"
          action="Crear"
          onClose={closeAllPopups}
        >
          <div className="form__field">
            <input
              type="text"
              id="title"
              className="form__input form__input_newplace-title popup__input"
              placeholder="Título"
              name="title"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="popup__error title-error"></span>
          </div>
          <div className="form__field">
            <input
              id="image"
              className="form__input form__input_newplace-url popup__input"
              placeholder="Enlace a la imagen"
              name="image"
              type="url"
              required
            />
            <span className="popup__error image-error"></span>
          </div>
        </PopupWithForm>
      </Popup>
      <Popup isOpen={imagePic}>
        <ImagePopup
          cardInfoPopup={selectedCard}
          onClose={closeAllPopups}
        ></ImagePopup>
      </Popup>

 

*/
