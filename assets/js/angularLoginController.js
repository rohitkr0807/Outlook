// eslint-disable-next-line no-undef
let loginApp = angular.module('outlookApp',[]);

loginApp.controller('outlookAppController' , function($scope,$http){

  $scope.getLoginButton = function() {
    debugger;
    $http({
      method: 'GET',
      url: '/gethello',
    }).then(function success(response){
      console.log('Hello');
    })
  }
});
