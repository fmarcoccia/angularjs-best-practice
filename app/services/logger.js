/**
 * Created by fabio on 14/02/17.
 */
(function () {
   'use strict';
    /**
     * logger factory
     * @namespace Factories
     */
    angular.module('app.services').
        factory('logger', logger);

    /* @ngInject */
    function logger($log) {

        return {
            printInfo: printInfo,
            printError: printError
        };

       function printInfo(info) {
           $log.info(info);
       }

       function printError(error) {
           $log.error(error);
       }


    }
    
})();