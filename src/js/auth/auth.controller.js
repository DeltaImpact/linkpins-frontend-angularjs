import {
  parseJSON,
  processErrorResponse,
  getSafe,
  controllerError
} from "../utils/misc";

class AuthCtrl {
  constructor(User, $state, $scope) {
    "ngInject";

    this._User = User;
    this._$state = $state;
    this._$scope = $scope;
    // debugger
    this.message = $scope;
    this.title = $state.current.title;
    this.authType = $state.current.name.replace("app.", "");

    // // this.errors = controllerError(err);
    // $scope.$watch('this.errors', (newErrors) => {
    //   debugger
    //   this.errors = controllerError(newErrors);
    //   // this.currentUser = newUser;
    // })
    // this._$scope.$on("alert:error", this.displayError(event, data));
  }

  displayError(event, data) {
    console.log(data); // Данные, которые нам прислали
    // this.message = "asdasdasd";
    // debugger;
    this.message = data.message;
  }

  submitForm() {
    this.isSubmitting = true;
    this._User.attemptAuth(this.authType, this.formData).then(
      res => {
        // debugger;
        this._$state.go("app.home");
      },
      err => {
        this.isSubmitting = false;
        this.errors = controllerError(err);
        // this.message = "asdasdasd";

        this.displayError("alert:error", err, "Error while loading user roles.");
        this._$scope.$broadcast(
          "alert:error",
          err,
          "Error while loading user roles."
        );
        // this._$state.$apply(function() {
        //   this.errors = controllerError(err);
        //   // $scope.resultData.totalResults = response.data.total;
        // });
        // debugger;
      }
    );
  }
}

export default AuthCtrl;
