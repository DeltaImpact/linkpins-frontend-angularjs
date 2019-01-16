class AppHeaderCtrl {
  constructor(AppConstants, User, $scope) {
    "ngInject";

    this.appName = AppConstants.appName;
    this.currentUser = User.current;

    $scope.$watch(
      function() {
        return User.current;
      },
      newUser => {
        this.currentUser = newUser;
      },
      true
    );

    this.logout = User.logout.bind(User);
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: "layout/header.html"
};

export default AppHeader;
