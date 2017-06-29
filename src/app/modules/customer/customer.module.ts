import * as angular from "angular";
import '@uirouter/angularjs';
import listController from "./js/list.controller";
import formController from "./js/form.controller";
/*let listController = function ($scope) {
 $scope.crudUrl = 'http://localhost:3000/customer/'
 }*/
listController.$inject = ["$scope"];
formController.$inject = ["$scope","CRUDFactory","$state"];

export default angular.module("customer.module",["ui.router"])
	.config(['$stateProvider',function($stateProvider:any){
		$stateProvider.state('customers',{
			url:'customers',
			templateUrl:'app/modules/customer/templates/list.views.html',
			controller:listController
		}).state('customersDetails',{
			url:'customers/:dni/details',
			templateUrl:'app/modules/customer/templates/form.views.html',
			controller:formController
		}).state('customersCreate',{
			url:'customers/create',
			templateUrl:'app/modules/customer/templates/form.views.html',
			controller:formController
		})
	}]);