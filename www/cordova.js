angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
angular.module('starter.controllers', [])

.config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider,$ionicConfigProvider) {



 .state('tab.product', {
    url: '/product',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-product.html',
        controller: 'DashCtrl'
      }
    }
  })
.controller('DashCtrl', function($scope) {})



}
