(function () {
    'use strict';
    angular
        .module('mainApp')
        .component('myTable', {
            bindings: {
                users: '<',
            },
            transclude: true,
            restrict: 'E',
            templateUrl: 'components/table/table.component.html',
            controller: TableController,
        });

    TableController.$inject = ['dataService', 'modalService'];
    function TableController(dataService, modalService) {
        console.log(dataService.getUsers())
        const $ctrl= this;
        $ctrl.$onInit = onInit;
        $ctrl.$onChanges = onChanges;
        $ctrl.$onDestroy = onDestroy;
        $ctrl.people = []
        $ctrl.showModal = false
        $ctrl.thTable = ['USERNAME','FIRST NAME','LAST NAME','EMAIL','TYPE'];
        $ctrl.editPersonModal = editPersonModal;
        $ctrl.showUsers =  function(){
            console.log('SHOWUSER')
        };

        function onInit() {
            console.log($ctrl.people)
            console.log('INIT')
            console.log(dataService.getUsers())
            $ctrl.people = dataService.getUsers();

            console.log($ctrl)
        }

        function onChanges(changesObj) {
        }

        function onDestroy() {

        }

        function editPersonModal(person) {
            modalService.showModal()
            console.log(modalService.show)
            console.log(person)
        }
    }
})();
