class HomeCtrl {
  constructor(User, Pins, AppConstants, $scope) {
    "ngInject";

    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this._Pins = Pins;

    Pins.getMainPage().then(pins => {
      this.mainPagePinsLoaded = true;
      this.mainPagePins = pins;
      // debugger;
      $scope.$apply();
    });
  }

  // changeList(newList) {
  //   this._$scope.$broadcast("setListTo", newList);
  // }
}

export default HomeCtrl;
