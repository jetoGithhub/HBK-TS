import ComponentsController from "./crud.app.controller";

class CrudComponents implements ng.IComponentOptions{
	public bindings: any;
	public controller: any;
	public templateUrl: string;
	constructor(){
		this.bindings = {
			ajax : "@?",
			url: "@",
			path: "@",
		};
		this.controller = ComponentsController;
		this.templateUrl = "app/components/crud/template/component.template.html";
	}
}

export default new CrudComponents();