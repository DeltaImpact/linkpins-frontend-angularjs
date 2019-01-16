import angular from 'angular';

let profileModule = angular.module('app.profile', []);

// Config
import ProfileConfig from './profile.config'
profileModule.config(ProfileConfig);


// Controllers
import ProfileCtrl from './profile.controller';
profileModule.controller('ProfileCtrl', ProfileCtrl);


export default profileModule;
