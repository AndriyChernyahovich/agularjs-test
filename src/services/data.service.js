(function () {
    'use strict';

    angular
        .module('mainApp')
        .factory('dataService', DataService);

    DataService.$inject = [];
    function DataService() {
        // const $ctrl = this;
        // this.getUsers = getUsers;
        const people = [
            { id: 1, username: 'mperry1992', firstName: 'Mathew', lastName: 'Perry', email: 'mathew@mail.com', type: 'Admin', password: '1234', repeatPassword: '1234' },
            { id: 2, username: 'mperry1992', firstName: 'Mathew', lastName: 'Perry', email: 'mathew@mail.com', type: 'Admin', password: '1234', repeatPassword: '1234' },
            { id: 3, username: 'mperry1992', firstName: 'Mathew', lastName: 'Perry', email: 'mathew@mail.com', type: 'Admin', password: '1234', repeatPassword: '1234' },
            { id: 4, username: 'mperry1992', firstName: 'Mathew', lastName: 'Perry', email: 'mathew@mail.com', type: 'Admin', password: '1234', repeatPassword: '1234' },
            { id: 5, username: 'mperry1992', firstName: 'Mathew', lastName: 'Perry', email: 'mathew@mail.com', type: 'Admin', password: '1234', repeatPassword: '1234' },
            { id: 6, username: 'mperry1992', firstName: 'Mathew', lastName: 'Perry', email: 'mathew@mail.com', type: 'Admin', password: '1234', repeatPassword: '1234' },
            { id: 7, username: 'mperry1992', firstName: 'Mathew', lastName: 'Perry', email: 'mathew@mail.com', type: 'Admin', password: '1234', repeatPassword: '1234' },
            { id: 8, username: 'mperry1992', firstName: 'Mathew', lastName: 'Perry', email: 'mathew@mail.com', type: 'Admin', password: '1234', repeatPassword: '1234' },
            { id: 9, username: 'mperry1992', firstName: 'Mathew', lastName: 'Perry', email: 'mathew@mail.com', type: 'Admin', password: '1234', repeatPassword: '1234' },
            { id: 10, username: 'mperry1992', firstName: 'Mathew', lastName: 'Perry', email: 'mathew@mail.com', type: 'Admin', password: '1234', repeatPassword: '1234' },
        ];

        function getUsers(){
            return people;
        }

        return {
            getUsers: getUsers
        }
    }
})();
