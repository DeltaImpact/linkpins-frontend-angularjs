export default class JWT {
  constructor(AppConstants, $window) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$window = $window;
  }

  save(response) {
    // this._$window.localStorage[this._AppConstants.jwtKey] = response.token;
    let user = {
      username: response.userName,
      email: response.email,
      token: response.token
    };
    localStorage.setItem("user", JSON.stringify(user));

  }

  get() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log("userGet");
    return user.token;


    // return this._$window.localStorage[this._AppConstants.jwtKey];
  }

  destroy() {
    console.log("user destroy");
    localStorage.removeItem("user");

    // this._$window.localStorage.removeItem(this._AppConstants.jwtKey);
  }

}
