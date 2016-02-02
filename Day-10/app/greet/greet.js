var greetModule = angular.module("myApp.greet", ["ngRoute"]);

greetModule.config(function($routeProvider){
    $routeProvider
        .when("/greet", {
            templateUrl : "greet/greet.html",
            controller : "greetController"
    });
});

greetModule.service('greetService', function(){
    this.greet = function(name){
        return 'Hi ' + name + ', Have a nice day!';
    }
});

greetModule.controller("greetController", function($scope, greetService){
    $scope.name = '';
    $scope.message = '';
    $scope.greet = function(){
        $scope.message = greetService.greet($scope.name);
    }
});

greetModule.filter("trimText", function(){
    return function(data){
        return data.length < 30 ? data : data.substr(0,30) + '...';
    }
});

greetModule.service('mathService', function(){
    this.add = function(x,y){
        return x + y;
    }
});
