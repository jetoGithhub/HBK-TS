import 'angular';
import '@uirouter/angularjs';
import 'angular-resource';
import crud from './app/components/crud/crud.app.module';

export const app = angular.module('app', ['ui.router','ngResource',crud.name]);

routesConfig.$inject = ['$stateProvider'];

function routesConfig($stateProvider: any) {
    var helloState = {
        name: 'main',
        url: '/main',
        template: '<crud-app-template></crud-app-template>'
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the app!</h3>'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
}

app.config(routesConfig);

angular.element(document).ready(function() {
    angular.bootstrap(document.body, [ app.name ], {
        strictDi: true
    });
});
