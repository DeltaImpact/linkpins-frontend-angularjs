function authInterceptor(JWT, AppConstants, $window, $q) {
  'ngInject'

  return {
    // automatically attach Authorization header
    request: function(config) {
      if(config.url.indexOf(AppConstants.api) === 0 && JWT.getToken()) {
        config.headers.Authorization = 'Token ' + JWT.getToken();
      }
      return config;
    },

    // // Handle 401
    responseError: function(rejection) {
      if (rejection.status === 401) {
        debugger
        // clear any JWT token being stored
        JWT.destroy();
        // do a hard page refresh
        $window.location.reload();
      }
      return $q.reject(rejection);
    }

  }
}

export default authInterceptor;
