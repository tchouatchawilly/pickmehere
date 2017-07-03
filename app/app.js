'use strict';

var DEFAULT_JOB_POSITION = "Java Developer"
//All level
var DEFAULT_LEVEL = 6
var DEFAULT_LOCATION = "Mauritius"

// app components
angular.module('pickmeHereApp', [
  'ngRoute'
]).controller('HomeCtrl', ['$scope', function ($scope) {

  $scope.name = "testing";

  $scope.$watch('filter.jobposition', function (newVal, oldVal) {
    if (newVal) {
      console.log(newVal);
    } else {
      console.log("bad");
    }
  });

  $scope.$watch('filter.level', function (newVal, oldVal) {
    if (newVal) {
      console.log(newVal);
    } else {
      console.log("bad");
    }
  });

  $scope.$watch('filter.location', function (newVal, oldVal) {
    if (newVal) {
      console.log(newVal);
    } else {
      console.log("bad");
    }
  });

  $scope.$watch('filter.skills', function (newVal, oldVal) {
    if (newVal) {
      console.log(newVal);
    } else {
      console.log("bad");
    }
  });

}]);
