class SettingsCtrl {
  constructor(User, Parse, $state, $scope) {
    "ngInject";

    this._User = User;
    this._$state = $state;
    this._$scope = $scope;
    this._Parse = Parse;

    this.isLoading = false;
    this.ToParseUrl = "";
    this.ToParseUrl = "https://habr.com/ru/post/183008/";
    this.parsing = Parse.parsing.bind(this.ToParseUrl);
  }

  parseSite() {
    this.isLoading = true;
    this.errors = null;
    this._Parse.parsing(this.ToParseUrl).then(
      item => {
        this.item = item;
        this.pinPreview = {};
        this.pinPreview.header = item.header;
        this.pinPreview.images = item.images[0];
        this.pinPreview.possibleDescriptions = item.possibleDescriptions[0];
        this.pinPreview.url = item.url; 
        this.isLoading = false;
        this._$scope.$apply();
      },
      errors => {
        // debugger

        this.errors = errors.messages;
        // this.errors = errors;
        this.isLoading = false;
        this._$scope.$apply();
      }
    );
  }

  setPinPreviewImage(url) {
    console.log(url);
    this.pinPreview.images = url;
  }

  setPinPreviewDescription(text) {
    console.log(text);
    this.pinPreview.possibleDescriptions = text;
  }
}

export default SettingsCtrl;
