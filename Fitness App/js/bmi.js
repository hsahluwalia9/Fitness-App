angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.items=[];
    $scope.calculateHealthStats = function () {
        $scope.bmi=Math.round($scope.weight/($scope.height*$scope.height)*1000/1000);
        $scope.dailyCalories = Math.round((((10*$scope.weight) + (6.25*($scope.height*100)) - (5*$scope.age))*1.5)-500)*1000/1000;
        $scope.protein = $scope.dailyCalories*(0.5);
        $scope.fats= $scope.dailyCalories*(0.15);
        $scope.carbs = $scope.dailyCalories-$scope.protein-$scope.fats;
        $scope.proteinPct = ($scope.protein/$scope.dailyCalories)*100 + '%';
        $scope.fatsPct = ($scope.fats/$scope.dailyCalories)*100 + '%';
        $scope.carbsPct = ($scope.carbs/$scope.dailyCalories)*100+ '%';
    }
});
