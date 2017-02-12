angular.module('app').controller('mainCtrl', function($scope, dataService){
    $scope.test = 'wired up and ready to go';
    $scope.quotes = dataService.quotes;
});