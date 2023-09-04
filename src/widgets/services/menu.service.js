(function () {
  'use strict';

  angular
    .module('mainApp')
    .service('menuService', MenuService);

  MenuService.$inject = ['$state'];
  function MenuService($state) {
    console.log($state.get());
    console.log('')
    // this.getMenuItems = getMenuItems;
    //
    // ////////////////
    //
    // const menuItems = [];
    //
    // // Init menu items
    // angular.forEach($state.get(), (state) => {
    //   if (angular.isString(state.title) && state.title != '') {
    //     menuItems.push({
    //       state: state.name,
    //       title: state.title
    //     });
    //   }
    // });
    //
    // ////////////////
    //
    // function getMenuItems() {
    //   return menuItems;
    // }
  }
})();
