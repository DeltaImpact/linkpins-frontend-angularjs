function ParsingConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.parse', {
    url: '/parse',
    controller: 'ParsingCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'parse/parse.html',
    title: 'Parsing',
    resolve: {
      auth: function(User) {
        return User.ensureAuthIs(true);
      }
    }
  });
};

export default ParsingConfig;
