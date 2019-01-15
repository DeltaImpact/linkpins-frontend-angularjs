import { parseJSON, processErrorResponse, getSafe } from "../utils/misc";
import axios from "axios";

export default class Tags {
  constructor(JWT, AppConstants, $http, $q) {
    "ngInject";

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._JWT = JWT;
  }

  getAll() {
    return this._$http({
      url: this._AppConstants.api + "/tags",
      method: "GET"
    }).then(res => res.data.tags);
  }

  getMainPage() {
    return axios
      .get(
        `${this._AppConstants.apiUrl}/pin/getMainPage`,
        {},
        {
          headers: { Authorization: "Bearer " + this._JWT.getToken() }
        }
      )
      .then(parseJSON)
      .then(
        object => {
          // debugger;

          return object;
        },
        error => {
          // debugger;

          return Promise.reject(processErrorResponse(error));
        }
      );
  }
}
