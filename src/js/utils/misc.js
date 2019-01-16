import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
var ruLocale = require("date-fns/locale/ru");

export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
  };
}

export function parseJSON(response) {
  return response.data;
}

export function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// export function processErrorResponse(error) {
//   let err = {};
//   if (error.response) {
//     err.response = error.response;
//     if (error.response.status === 400) {
//       err.status = error.response.status;
//       err.info = error.response.statusText;
//       err.message = error.response.data.message;
//     }

//     if (error.response.data) {
//       err.messages = error.response.data;
//     }
//   }

//   // debugger;
//   if (error.message === "Network Error") {
//     err.status = 503;
//     err.message = "Network Error";
//     let errObj = {};
//     errObj.message = err.message;
//     err.data = {};
//     err.data.errors = {errObj};
//   }
//   // debugger;
//   return err;
// }

export function processErrorResponse(error) {
  let err = [];
  if (error.response) {
    err.response = error.response;
    if (error.response.status === 400) {
      err.status = error.response.status;
      err.info = error.response.statusText;
      err.message = error.response.data.message;
    }

    if (error.response.data) {
      err.messages = error.response.data;
    }
  }

  if (error.message === "Network Error") {
    // let msg = {};
    err.status = 503;
    // msg.message = "Network Error";
    err.messages = {};
    err.messages.Networking = ["Network Error"];
    // debugger
  }
  return err;
}

export function controllerError(error) {
  // debugger;
  let errors = [];
  // debugger;
  if (error.messages != undefined) {
    if (error.messages.message) {
      errors.message = [error.messages.message];
      return errors;
    }
    return error.messages;
    // if (error.messages.count > 1)
    // return (errors[error.messages[0]] = error.messages[0]);
  }
  if ((error.message = "Network Error")) errors.networking = ["Network Error"];
  return errors;
}

function convertUTCTimeToLocalTime(UTCDateString) {
  var convertLocalTime = new Date(UTCDateString);
  var hourOffset = convertLocalTime.getTimezoneOffset() / 60;
  convertLocalTime.setHours(convertLocalTime.getHours() - hourOffset);
  return convertLocalTime;
}

export function dateInWordsToNow(date) {
  return date == null
    ? null
    : distanceInWordsToNow(
        convertUTCTimeToLocalTime(date)
        // {
        //     locale: ruLocale
        //   }
      );
}

export function getSafe(fn, defaultVal) {
  if (!undefined) return fn;
  // debugger
  try {
    return fn();
  } catch (e) {
    return defaultVal;
  }
}
