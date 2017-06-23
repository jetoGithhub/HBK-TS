(function (global) {
    System.config({
        map: {
            app: 'app',
            '@uirouter/angularjs': 'npm:@uirouter/angularjs/release/ui-router-angularjs.js',
            'angular': 'npm:angular/angular.js'
        },
        meta: {
            '@uirouter/angularjs': {
                format: 'global'
            },
            'angular': {
                exports: 'angular',
                format: 'global'
            }
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            }
        },
        paths: {
            'npm:': 'node_modules/'
        }
    });
})(this);
