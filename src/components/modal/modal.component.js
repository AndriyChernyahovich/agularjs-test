(function () {
    'use strict';
    angular
        .module('mainApp')
        .component('myModal', {
            bindings: {
                show: '=',
            },
            transclude: true,
            restrict: 'E',
            templateUrl: 'components/modal/modal.component.html',
            controller: ModalController,
        });

    ModalController.$inject = ['dataService', 'modalService'];
    function ModalController(dataService, modalService) {
        console.log(dataService.getUsers())
        const $ctrl= this;
        $ctrl.$onInit = onInit;
        $ctrl.$onChanges = onChanges;
        $ctrl.$onDestroy = onDestroy;
        $ctrl.closeModal = function (){
            console.log('CLOSE')
            modalService.hideModal()
            $ctrl.show = modalService.show;
        }
        function onInit() {
            console.log($ctrl.people)
            console.log('INIT')
            console.log(dataService.getUsers())
            $ctrl.people = dataService.getUsers();
            console.log($ctrl.showModal)
            console.log($ctrl)
        }

        function onChanges(changesObj) {
        }

        function onDestroy() {

        }

        // function showModaltest() {
        //     $ctrl.showModal = true
        //     console.log(person)
        // }
    }
})();
