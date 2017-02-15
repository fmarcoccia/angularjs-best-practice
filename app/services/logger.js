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
            getInfo: getInfo,
            getError: getError
        };

       function getInfo(info) {
           $log.info(info);
       }

       function getError(error) {
           $log.error(error);
       }


    }
    
})();