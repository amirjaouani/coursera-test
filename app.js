(function (){
  'use strict'; //Protegge il codice

  angular.module('myFistApp', [])

  .controller('MyFirstController', function($scope){

    $scope.name = "Pippo";
  });
})();
