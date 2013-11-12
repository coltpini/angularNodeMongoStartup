angular.module('app').controller('NodesCtrl', ['$scope', 'Node', function($scope, Node){
    var nodes = Node.query(function(){
        $scope.nodes = nodes;
    });

    $scope.newNode = function(){
        var node = new Node();
        node.node = this.newNodeName;
        node.$save();
        $scope.nodes.push(node);
        this.newNodeName = "";
    };
    $scope.updateNode = function(){
        var n = this.node;
        n.childNodes.push({node: this.newChildName});
        n.$update({id:n._id});
        this.newChildName = "";
    };
}]);