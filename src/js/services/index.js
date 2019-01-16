import angular from "angular";

// Create the module where our functionality can attach to
let servicesModule = angular.module("app.services", []);

import JwtService from "./jwt.service";
servicesModule.service("JWT", JwtService);

import PinService from "./pin.service";
servicesModule.service("Pins", PinService);

import ParseService from "./parse.service";
servicesModule.service("Parse", ParseService);



import UserService from "./user.service";
servicesModule.service("User", UserService);

import ProfileService from "./profile.service";
servicesModule.service("Profile", ProfileService);

import ArticlesService from "./articles.service";
servicesModule.service("Articles", ArticlesService);

import CommentsService from "./comments.service";
servicesModule.service("Comments", CommentsService);

export default servicesModule;
