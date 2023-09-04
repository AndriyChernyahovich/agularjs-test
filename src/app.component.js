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
    $ctrl.showModal = false;
    $ctrl.openModal = function (){
      modalService.showModal();
      $ctrl.showModal = modalService.show;
      console.log('openModal')
      console.log($ctrl.showModal)
    }
    $ctrl.createUser = function (){
      console.log('createUser')
      console.log(123213)
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
