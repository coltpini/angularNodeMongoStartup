/* user service */
angular.module('app').factory('User', ['$resource', function($resource){
  	return $resource('user/:id', {id: '@id'}, {
   		update: {method: 'PUT'}
  	});
}]);