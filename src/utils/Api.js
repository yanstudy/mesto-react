class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, { headers: this.headers }).then(
      (res) => this._checkResponse(res)
    );
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, { headers: this.headers }).then(
      (res) => this._checkResponse(res)
    );
  }

  editProfile(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._checkResponse(res));
  }

  addNewCard({ name, link }) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteCard(cardsId) {
    return fetch(`${this.baseUrl}/cards/${cardsId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => this._checkResponse(res));
  }

  addLike = (cardsId) => {
    return fetch(`${this.baseUrl}/cards/${cardsId}/likes`, {
      method: "PUT",
      headers: this.headers,
    }).then((res) => this._checkResponse(res));
  };

  removeLike = (cardsId) => {
    return fetch(`${this.baseUrl}/cards/${cardsId}/likes`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => this._checkResponse(res));
  };

  changeLikeCardStatus = (cardsId, isLiked) => {
    return isLiked ? this.removeLike(cardsId) : this.addLike(cardsId);
  };

  editAvatar(link) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then((res) => this._checkResponse(res));
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-70",
  headers: {
    authorization: "06c146c5-fdfa-4750-9867-de096eb4c728",
    "Content-Type": "application/json",
  },
});
