class HomeCtrl {
  constructor(User, Pins, AppConstants, $scope) {
    "ngInject";

    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this._Pins = Pins;

    Pins.getMainPage().then(
      pins => {
        this.mainPagePinsLoaded = true;
        this.mainPagePins = pins;
        console.log(this.mainPagePins);
        // debugger;
        $scope.$apply();
      },
      errors => {
        this.mainPagePinsLoaded = true;
        this.errors = errors;
        $scope.$apply();
        // debugger;
      }
    );
  }
}

export default HomeCtrl;
