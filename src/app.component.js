(function () {
  'use strict';

  angular
    .module('mainApp')
      .component('app', {
      transclude: true,
      restrict: 'E',
      templateUrl: 'app.component.html',
      controller: AppController,
    });

  AppController.$inject = ['dataService', 'modalService'];
  function AppController(dataService, modalService) {
    const $ctrl = this;
    $ctrl.$onInit = onInit;
    $ctrl.$onChanges = onChanges;
    $ctrl.$onDestroy = onDestroy;
    $ctrl.people = dataService.getUsers();
    $ctrl.openModal = function (){
      console.log('OpenModal')
      modalService.open();
    }
    $ctrl.createUser = function (){
      console.log('createUser')
    }
    $ctrl.title = 'Profile Test';

    function onInit() {
      console.log('asdsadasd')
    }

    function onChanges(changesObj) {

    }

    function onDestroy() {

    }

    function test (){}

  }
})();
