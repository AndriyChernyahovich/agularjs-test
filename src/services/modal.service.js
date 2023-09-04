(function () {
    'use strict';

    angular
        .module('mainApp')
        .factory('modalService', ModalService);

    ModalService.$inject = [];
    function ModalService() {
        this.show = false;

        function showModal(){
            this.show = true;
        }

        function hideModal(){
            this.show = false;
        }

        return {
            show: this.show,
            showModal: showModal,
            hideModal: hideModal
        }
    }
})();
