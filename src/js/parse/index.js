import angular from 'angular';

let parsingModule = angular.module('app.parse', []);

// Config
import ParsingConfig from './parse.config'
parsingModule.config(ParsingConfig);


// Controllers
import ParsingCtrl from './parse.controller';
parsingModule.controller('ParsingCtrl', ParsingCtrl);


export default parsingModule;
