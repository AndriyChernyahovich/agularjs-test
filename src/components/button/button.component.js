(function () {
    'use strict';
    angular
        .module('mainApp')
        .component('myButton', {
            bindings: {
                color: '<',
                label: '<',
                onClick : '&'
            },
            transclude: true,
            restrict: 'E',
            templateUrl: 'components/button/button.component.html',
            controller: ButtonController,
        });

    ButtonController.$inject = [];
    function ButtonController() {
        const $ctrl= this;
        $ctrl.$onInit = onInit;
        $ctrl.$onChanges = onChanges;
        $ctrl.$onDestroy = onDestroy;

        function onInit() {}

        function onChanges(changesObj) {}

        function onDestroy() {}
    }
})();
