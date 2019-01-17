class SettingsCtrl {
  constructor(User, Parse, $state, $scope, $stateParams) {
    "ngInject";

    this._User = User;
    this._$state = $state;
    this._$scope = $scope;
    this._Parse = Parse;
    this._$stateParams = $stateParams;

    // this.isLoading = false;
    this.isLoading = true;

    User.dataAboutUser($stateParams.username).then(
      dataAboutUser => {
        this.isLoading = false;
        this.userData = dataAboutUser;
        // debugger
        $scope.$apply();
      },
      errors => {
        this.isLoading = false;
        this.errors = errors.messages;
        // debugger


        $scope.$apply();
        // debugger;
      }
    );
  }

}

export default SettingsCtrl;
