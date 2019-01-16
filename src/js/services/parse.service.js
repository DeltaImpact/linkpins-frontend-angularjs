import { parseJSON, processErrorResponse, getSafe } from "../utils/misc";
import axios from "axios";

export default class Parse {
  constructor(JWT, AppConstants, $http, $q) {
    "ngInject";

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._JWT = JWT;
  }

  parsing(url) {
    return axios
      .post(`${this._AppConstants.apiUrl}/parse`, {
        url: url
      })
      .then(parseJSON)
      .then(
        response => {
          return response;
        },
        error => {
          return Promise.reject(processErrorResponse(error));
        }
      );
  }
}
