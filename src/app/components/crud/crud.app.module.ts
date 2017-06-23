import * as angular from "angular";
import CRUDComponent from "./crud.app.component";
import CRUDFactory from "./crud.app.factory";
import CRUDService from "./crud.app.service";

export default angular
	.module('crud.app.module',[])
	.factory('crud.app.factory',CRUDFactory)
	.service("crudAppServices",CRUDService)
	.component('crudAppTemplate',CRUDComponent)
