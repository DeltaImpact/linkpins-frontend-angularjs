import {
  parseJSON,
  processErrorResponse,
  getSafe,
  controllerError
} from "../utils/misc";

class AuthCtrl {
  constructor(User, $state,  $scope) {
    "ngInject";

    this._User = User;
    this._$state = $state;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace("app.", "");

    // // this.errors = controllerError(err);
    // $scope.$watch('this.errors', (newErrors) => {
    //   debugger
    //   this.errors = controllerError(newErrors);
    //   // this.currentUser = newUser;
    // })
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
