/**
 * Created by fabio on 15/02/17.
 */
(function () {
    angular.module('app.services').
        factory('getFake', getFake);

    getFake.$inject = ['$q','logger','$http'];

    function getFake($q, logger, $http){

        return {
            getAPI: getAPI
        };

        function getAPI(){
            return $http.get('https://jsonplaceholder.typicode.com/posts/1')
                .then(getFakeComplete)
                .catch(getFakeFailed);
        }

        function getFakeComplete(data, status, headers, config) {
            return data.data;
        }

        function getFakeFailed(e) {
            var newMessage = 'XHR Failed for getCustomer';
            if (e.data && e.data.description) {
                newMessage = newMessage + '\n' + e.data.description;
            }
            e.data.description = newMessage;
            logger.getError(newMessage);
            return $q.reject(e);
        }
    }
})();