(function () {
  'use strict';

  angular
    .module('mainApp.core')
    .config(configure);

  configure.$inject = ['$locationProvider'];
  function configure($locationProvider) {
    console.log($locationProvider)
    $locationProvider.html5Mode(false);
  }
})();
