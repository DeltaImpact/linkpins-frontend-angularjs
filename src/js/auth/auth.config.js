function AuthConfig($stateProvider, $httpProvider) {
  "ngInject";

  $stateProvider

    .state("app.login", {
      url: "/login",
      controller: "AuthCtrl as $ctrl",
      templateUrl: "auth/auth.html",
      title: "Sign in"
      // resolve: {
      //   auth: function(User) {
      //     return User.ensureAuthIs(false);
      //   }
      // }
    })

    .state("app.register", {
      url: "/register",
      controller: "AuthCtrl as $ctrl",
      templateUrl: "auth/auth.html",
      title: "Sign up",
      // resolve: {
      //   resolvedVal: function() {
      //     console.log("a");
      //     return null;
      //     let deferred = this._$q.defer();
      //     return deferred.promise;
      //     deferred.resolve(false);
      //     // return "Karl";
      //   }
      // }
      // resolve: {
      //   auth: function(User) {
      //     return User.ensureAuthIs(false);
      //   }
      // }
    });
}

export default AuthConfig;
