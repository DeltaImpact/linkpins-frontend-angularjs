function ParsingConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.profile', {
    abstract: true,
    url: '/@:username',
    controller: 'ProfileCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'profile/profile.html',
    title: 'Profile',
    // resolve: {
    //   auth: function(User) {
    //     return User.ensureAuthIs(true);
    //   }
    // }
    // resolve: {
    //   profile: function(Profile, $state, $stateParams) {
    //     debugger
    //     return Profile.get($stateParams.username).then(
    //       (profile) => profile,
    //       (err) => $state.go('app.home')
    //     )
    //   }
    // }
  });
};

export default ParsingConfig;
