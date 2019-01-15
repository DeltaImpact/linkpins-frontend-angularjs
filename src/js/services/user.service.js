import { parseJSON, processErrorResponse, getSafe } from "../utils/misc";
import axios from "axios";
export default class User {
  constructor(JWT, AppConstants, $http, $state, $q) {
    "ngInject";

    this._JWT = JWT;
    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$state = $state;
    this._$q = $q;

    this.current = this._JWT.getCurrentUser();
  }

  attemptAuth(type, credentials) {
    let authObj = this.attemptAuthValidate(type, credentials);
    if (type == "register")
      return this.registerImpl(
        authObj.email,
        authObj.username,
        authObj.password,
        authObj.firstName,
        authObj.surName
      );
    if (type == "login") return this.loginImpl(authObj.email, authObj.password);
  }

  attemptAuthValidate(type, credentials) {
    // if (credentialsOriginal != undefined) return Promise.reject(processErrorResponse(error));
    let authObj = {};
    authObj.email = credentials && credentials.email ? credentials.email : "";
    authObj.username =
      credentials && credentials.username ? credentials.username : "";
    authObj.password =
      credentials && credentials.password ? credentials.password : "";
    authObj.firstName =
      credentials && credentials.firstName ? credentials.firstName : "";
    authObj.surName =
      credentials && credentials.surName ? credentials.surName : "";

    return authObj;
  }

  loginImpl(email, password) {
    try {
      return axios
        .post(`${this._AppConstants.apiUrl}/account/token`, {
          Email: email,
          Password: password
        })
        .then(parseJSON)
        .then(
          response => {
            this._JWT.save(response);
            this.current = response;
            // debugger;
            return response;
          },
          error => {
            // debugger;
            // let ansv = processErrorResponse(error);
            // debugger;
            return Promise.reject(processErrorResponse(error));
          }
        );
    } catch (e) {
      debugger;

      // return defaultVal;
    }
  }

  registerImpl(email, username, password, firstName, surName) {
    return axios
      .post(`${this._AppConstants.apiUrl}/account/register`, {
        Username: username,
        Email: email,
        Password: password,
        FirstName: firstName,
        Surname: surName
      })
      .then(parseJSON)
      .then(
        response => {
          this._JWT.save(response);
          this.current = response;
          return response;
        },
        error => {
          return Promise.reject(processErrorResponse(error));
        }
      );
  }

  update(fields) {
    return this._$http({
      url: this._AppConstants.api + "/user",
      method: "PUT",
      data: { user: fields }
    }).then(res => {
      this.current = res.data.user;
      return res.data.user;
    });
  }

  logout() {
    // debugger;
    this.current = null;
    this._JWT.destroy();
    this._$state.go(this._$state.$current, null, { reload: true });
  }

  verifyAuth() {
    let deferred = this._$q.defer();
    // check for JWT token
    // let df = localStorage;
    // debugger;
    if (!this._JWT.get()) {
      deferred.resolve(false);
      return deferred.promise;
    }

    if (this.current) {
      deferred.resolve(true);
    } else {
      this._$http({
        url: `${this._AppConstants.apiUrl}/account/user`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + this._JWT.getToken()
        }
      }).then(
        res => {
          this.current = res.data;
          deferred.resolve(true);
        },
        err => {
          this._JWT.destroy();
          deferred.resolve(false);
        }
      );
    }

    return deferred.promise;
  }

  ensureAuthIs(bool) {
    let deferred = this._$q.defer();
    this.verifyAuth().then(authValid => {
      if (authValid !== bool) {
        this._$state.go("app.home");
        deferred.resolve(false);
      } else {
        deferred.resolve(true);
      }
    });

    return deferred.promise;
  }

  dataAboutUser(nickname) {
    let requestUrl = `${
      this._AppConstants.apiUrl
    }/account/user?userNickname=${nickname}`;
    if (nickname == undefined) {
      requestUrl = `${this._AppConstants.apiUrl}/account/user`;
    }
    // debugger;

    return axios
      .get(requestUrl, {
        headers: { Authorization: "Bearer " + this._JWT.getToken() }
      })
      .then(parseJSON)
      .then(
        user => {
          // debugger;
          return user;
        },
        error => {
          // debugger;
          return Promise.reject(processErrorResponse(error));
        }
      );
  }
}
