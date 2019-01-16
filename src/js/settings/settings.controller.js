class SettingsCtrl {
  constructor(User, $state, $scope) {
    "ngInject";

    this._User = User;
    this._$state = $state;
    this._$scope = $scope;
    this.userInfoLoaded = false;
    this.mode = "profile";

    User.dataAboutUser(User.current.username).then(
      dataAboutUser => {
        this.userInfoLoaded = true;
        this.userData = dataAboutUser;
        this.formData = {
          email: this.userData.email,
          firstName: this.userData.firstName,
          surName: this.userData.surname,
          gender: this.userData.gender,
          username: this.userData.userName
        };
        $scope.$apply();
      },
      errors => {
        this.userInfoLoaded = true;
        this.errors = errors.messages;
        $scope.$apply();
        // debugger;
      }
    );

    this.logout = User.logout.bind(User);
  }
}

export default SettingsCtrl;
