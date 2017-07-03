'use strict';

var DEFAULT_JOB_POSITION = "Java Developer"
//All level
var DEFAULT_LEVEL = 6
var DEFAULT_LOCATION = "Mauritius"
var GCE_URL = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAyyg155IU-yqORUYfe8-4_87Q8hFyv75M&cx=016927734479450611209:c_wpluobuuq&cr=countryUS&q=%22"

// app components
angular.module('pickmeHereApp', [
  'ngRoute',
  'ngSanitize'
]).controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {

  $scope.$watch('filter.jobposition', function (newVal, oldVal) {
    if (newVal) {
      GCE_URL = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAyyg155IU-yqORUYfe8-4_87Q8hFyv75M&cx=016927734479450611209:c_wpluobuuq&cr=countryUS&q=%22"

      GCE_URL = GCE_URL + newVal + "%22";
     
      console.log(newVal);
      // GET Request to google cse
      $http({
        method: 'GET',
        url: GCE_URL
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response.data.items);
        $scope.resumes = response.data.items;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.error(response);
      });
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
