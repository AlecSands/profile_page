console.log('javascript sourced');
var x = true;

var myApp = angular.module('profile', ['ngMaterial'])
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');

  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple')
    .accentPalette('blue');

  $mdThemingProvider.theme('altTheme2')
    .primaryPalette('cyan')
    .accentPalette('lime');
});

myApp.controller('colorController', function(){
  console.log('angular sourced');

  var vm = this;
  vm.otherTheme = 'default';
  vm.x = true;

  var setTheme = function() {

    if (vm.x == true) {
      vm.x = false;
      vm.otherTheme = 'altTheme';
      console.log('setting the theme to alt:', vm.otherTheme);
    } else if (vm.x == false) {
      vm.x = 'other';
      vm.otherTheme = 'default';
      console.log('setting the theme to default:', vm.otherTheme);
    } else if (vm.x == 'other') {
      vm.x = true;
      vm.otherTheme = 'other';
      console.log('setting the theme to other:', vm.otherTheme);
    }
  };

  setInterval(setTheme, 1000);
});

// red
// pink
// purple
// deep-purple
// indigo
// blue
// light-blue
// cyan
// teal
// green
// light-green
// lime
// yellow
// amber
// orange
// deep-orange
// brown
// grey
// blue-grey
