class API {
  constructor(options) {
    this.options = options;
  }

  getUserInfo() {
    return fetch(
      "https://around.nomoreparties.co/v1/web_es_cohort_04/users/me",
      {
        headers: {
          authorization: "a6a0db06-97e2-459a-a0a1-f3c5559ea4e0",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getInitialCards() {
    return fetch("https://around.nomoreparties.co/v1/web_es_cohort_04/cards", {
      headers: {
        authorization: "a6a0db06-97e2-459a-a0a1-f3c5559ea4e0",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  handleDeleteCard(cardId) {
    return fetch(
      `https://around.nomoreparties.co/v1/web_es_cohort_02/cards/${cardId}`,
      {
        method: "DELETE",
        headers: {
          authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  handleEditProfile(value) {
    return fetch(
      "https://around.nomoreparties.co/v1/web_es_cohort_02/users/me",
      {
        method: "PATCH",
        headers: {
          authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${value.nombre}`,
          about: `${value.ocupación}`,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  handleAddCard(value) {
    return fetch("https://around.nomoreparties.co/v1/web_es_cohort_02/cards ", {
      method: "POST",
      headers: {
        authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${value.title}`,
        link: `${value.image}`,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  handleLikeClick(cardId) {
    return fetch(
      `https://around.nomoreparties.co/v1/web_es_cohort_02/cards/likes/${cardId}`,
      {
        method: "PUT",
        headers: {
          authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  handleUnLikeClick(cardId) {
    return fetch(
      `https://around.nomoreparties.co/v1/web_es_cohort_02/cards/likes/${cardId}`,
      {
        method: "DELETE",
        headers: {
          authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  handleChangeAvatar(value) {
    return fetch(
      "https://around.nomoreparties.co/v1/web_es_cohort_02/users/me/avatar",
      {
        method: "PATCH",
        headers: {
          authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: `${value.avatar}`,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

/*
  






const api = new API({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_02",
  headers: {
    authorization: "38be44b0-e909-4575-ba93-d677e497f17a",
    "Content-Type": "application/json",
  },
});


const api = new API({
  address: "https://nomoreparties.co",
  groupId: "https://around.nomoreparties.co/v1/web_es_cohort_02/users/me",
  token: "38be44b0-e909-4575-ba93-d677e497f17a",
});
*/

export default new API();
