/**
 * Created by fabio on 13/02/17.
 */
(function () {
    'use strict';

    angular.
        module('app.controllers').
        controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController($scope, logger) {

        let homeCtrl = this;
        homeCtrl.pageTitle = 'Best Practice';
        const COMPONENT_NAME = 'Home Ctrl';

        //Get up when all contents is loaded
        $scope.$on('$viewContentLoaded', function() {
            logger.printInfo('Loaded '+COMPONENT_NAME);
        });

        //Get up when ctrl was destroyed
        $scope.$on('$destroy', function() {
            logger.printInfo('Destroyed '+COMPONENT_NAME);
        });

        homeCtrl.exampleOfObj = {
            nome: 'Fabio',
            cognome: 'Marcoccia',
            eta: 24,
            professione: 'Visionary frontend developer',
            avatarPath: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAftAAAAJDk0Y2U1N2Y0LWNiZGYtNGRiMC05YTg1LTEzOWEyMmZjMTlhZg.jpg'
        };


    }

})();