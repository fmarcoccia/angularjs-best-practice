/**
 * Created by fabio on 14/02/17.
 */
(function () {
   'use strict';
    angular.module('app.services').
        factory('logger', logger);

    logger.$inject = ['$log'];

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