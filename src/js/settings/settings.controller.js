class SettingsCtrl {
  constructor(User, $state, $scope) {
    "ngInject";

    this._User = User;
    this._$state = $state;
    this._$scope = $scope;
    this.userInfoLoaded = false;
    this.mode = "profile";

    User.dataAboutUser(User.current.username).then(dataAboutUser => {
      this.userInfoLoaded = true;
      this.userData = dataAboutUser;
      this.formData = {
        email: this.userData.email,
        firstName: this.userData.firstName,
        surName: this.userData.surname,
        gender: this.userData.gender,
        username: this.userData.userName
      };
      $scope.$apply() 
    });

    this.logout = User.logout.bind(User);
  }

  submitForm() {
    this.isSubmitting = true;
    this._User.update(this.formData).then(
      user => {
        this._$state.go("app.profile.main", { username: user.username });
      },
      err => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    );
  }
}

export default SettingsCtrl;
