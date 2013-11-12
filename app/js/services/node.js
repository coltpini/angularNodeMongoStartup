/* Node service */
angular.module('app').factory('Node', ['$resource', function($resource){
    return $resource('node/:id', {id: '@id'}, {
        update: {method: 'PUT'}
    });
}]);