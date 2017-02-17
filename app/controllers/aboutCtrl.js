/**
 * Created by fabio on 14/02/17.
 */
(function () {
    'use strict';

    angular.
    module('app.controllers').
    controller('AboutController', AboutController);

    /* @ngInject */
    function AboutController($scope, logger, getFake, envService) {

        let aboutCtrl = this;
        const COMPONENT_NAME = 'Fake Promise Ctrl';

        aboutCtrl.pageTitle = 'About me';

        //Get up when all contents is loaded
        $scope.$on('$viewContentLoaded', function () {
            logger.printInfo('Loaded ' + COMPONENT_NAME);
            logger.printInfo(envService.getEnv());
        });

        //Get up when ctrl was destroyed
        $scope.$on('$destroy', function () {
            logger.printInfo('Destroyed ' + COMPONENT_NAME);
        });

        activate();

        function activate() {
            return getFake.getAPI().then(function (data) {
                logger.printInfo(data);
            })


        }
    }

})();