console.log('javascript sourced');

var myApp = angular.module('profile', ['ngMaterial'])
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
});

myApp.controller('colorController', function(){
  console.log('angular sourced');

  var vm = this;
});
