/**
 * Created by fabio on 13/02/17.
 */
(function () {
 'use strict';
 angular.module('app.directives',[]);
 angular.module('app.constants',[]);
 angular.module('app.services',['app.constants']);
 angular.module('app.controllers',['app.services']);
 angular.module('app', ['ngRoute','ngMaterial','app.constants','app.controllers','app.services']);

})();