/**
 * Created by fabio on 17/02/17.
 */
(function () {
   'use strict';
    angular.module('app.services').factory('envService', envService);

    /* @ngInject */
    function envService(ENV) {

        return {
            getEnv: getEnv
        };

        function getEnv() {
            return ENV.environments;
        }
    }

})();