/**
 * Created by fabio on 13/02/17.
 */
(function () {
 'use strict';

 angular.module('app.directives',[]);
 angular.module('app.services',[]);
 angular.module('app.constants',[]);
 angular.module('app.controllers',['app.services']);
 angular.module('app', ['ngRoute','ngMaterial','app.controllers','app.services']);

})();