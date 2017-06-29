import * as angular from "angular";
import '@uirouter/angularjs';
import listController from "./js/list.controller";

listController.$inject = ["$scope","CRUDFactory"];

export default angular.module("employee.module",["ui.router"])
	.config(['$stateProvider',function($stateProvider:any){
		$stateProvider.state('employees',{
			url:'employees',
			templateUrl:'app/modules/employee/templates/list.views.html',
			controller:listController
		})
		.state('employees.details',{
			url:'employees/:employeeId',
			templateUrl:'',
		})
	}]);