import * as angular from 'angular';
import '@uirouter/angularjs';
import 'angular-resource';
import crud from './app/components/crud/crud.app.module';
import employeeModule from './app/modules/employee/employee.module';
import customerModule from './app/modules/customer/customer.module';

export const app = angular.module('app', [
    'ui.router',
    'ngResource',
    crud.name,
    employeeModule.name,
    customerModule.name
]);

routesConfig.$inject = ['$stateProvider'];

function routesConfig($stateProvider: any) {}

app.config(routesConfig);

angular.element(document).ready(function() {
    angular.bootstrap(document.body, [ app.name ], {
        strictDi: true
    });
});
