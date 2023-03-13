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

function App(props) {
  const [isAvatarProfilePopupOpen, setAvatarProfilePopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [imagePic, setImagePic] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState("");
  const [eraseCardAsk, setEraseCardAsk] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

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
        setCurrentUser(info);
        //setUserName(info.name);
        //setUserDescription(info.about);
        //setUserAvatar(info.avatar);
      }, [])
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
          onCardClick={handleCardClick}
          onDeleteCardAsk={handleEraseAsk}
          //onEraseCard={onEraseCard}
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
    setCurrentUser(card);
  }
  function handleChangeAvatar(data) {
    api
      .handleChangeAvatar(data)
      .then((data) => setCurrentUser(data))
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

  function handleCardDelete(card) {
    /*api
      .handleCardDelete(card._id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));*/
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
            onEraseCard={handleCardDelete}
            onClose={closeAllPopups}
          ></DeleteCardForm>
        </Popup>

        <Popup isOpen={isEditProfilePopupOpen}>
          <UpdateProfileForm onClose={closeAllPopups}></UpdateProfileForm>
        </Popup>

        <Popup isOpen={isAvatarProfilePopupOpen}>
          <ChangeAvatarForm
            onClose={closeAllPopups}
            onUpdateAvatar={handleChangeAvatar}
          ></ChangeAvatarForm>
        </Popup>
      </UserContext.Provider>
    </>
  );
}

export default App;

/*      


      <Popup isOpen={isAvatarProfilePopupOpen}>
        <PopupWithForm
          name="form-change-profile-avatar"
          title="Cambiar foto de perfil"
          action=" Guardar"
          onClose={closeAllPopups}
        >
          <div className="form__field">
            <input
              id="avatar"
              className="form__input form__input_new-avatar-url popup__input"
              placeholder="Enlace a la imagen del avatar"
              name="avatar"
              type="url"
              required
            />
            <span className="popup__error avatar-error"></span>
          </div>
        </PopupWithForm>
      </Popup>

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
