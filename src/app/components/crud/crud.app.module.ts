import * as angular from "angular";
import CRUDComponent from "./crud.app.component";
import CRUDFactory from "./crud.app.factory";
import CRUDService from "./crud.app.service";

CRUDService.$inject = ['$resource'];

export default angular
	.module('crud.app.module',[])
	.factory('CRUDFactory',["crudAppServices",(crudAppServices:any) => new CRUDFactory(crudAppServices)])
	.service("crudAppServices",CRUDService)
	.component('crudAppTemplate',CRUDComponent)
