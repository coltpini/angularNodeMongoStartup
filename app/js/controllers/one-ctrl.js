/* Example controller that uses a service to communicate with a REST web service */
angular.module('app').controller('MyCtrl1', ['$scope', 'User', function($scope, User){

  //get all users
  var users = User.query(function(){
    $scope.users = users;
  });

  $scope.saveAll = function(){
    $scope.users.forEach(function(user){
      user.$update();
    });
  };
}]);