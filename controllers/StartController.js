snowGame.controller('startCtrl', function startCtrl($scope) {
    $scope.display = false;

    $scope.show  = function() {
        console.log("Hello");
        $scope.display = true;
    };
});
