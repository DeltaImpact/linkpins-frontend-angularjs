import { debug } from "util";

export default class JWT {
  constructor(AppConstants, $window) {
    "ngInject";

    this._AppConstants = AppConstants;
    this._$window = $window;
  }

  save(response) {
    console.log("user save");
    let user = {
      username: response.userName,
      email: response.email,
      token: response.token
    };
    localStorage.setItem("user", JSON.stringify(user));
  }

  get() {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("userTokenGet");
    return user.token;
  }

  getCurrentUser() {
    console.log("userGet");
    return JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : null;
  }

  destroy() {
    console.log("user destroy");
    localStorage.removeItem("user");
  }
}
