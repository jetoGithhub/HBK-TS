//import 'angular';
//import '@uirouter/angularjs';

declare let angular: any;

export const app = angular.module('app', ['ui.router']);

function Uno($stateProvider: any) {
    var helloState = {
        name: 'main',
        url: '/main',
        template: '<h3>hello world!</h3>'
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the app!</h3>'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
}
Uno.$inject = ['$stateProvider'];

app.config(Uno);

angular.element(document).ready(function() {
    angular.bootstrap(document.body, [ app.name ], {
        strictDi: true
    });
});
