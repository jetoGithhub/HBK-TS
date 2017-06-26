import ComponentsController from "./crud.app.controller";

class CrudComponents implements ng.IComponentOptions{
	public bindings: any;
	public controller: any;
	public template: string;
	constructor(){
		/*this.bindings = {
			textBinding : "=",
			dataBindings: "@"
		}*/
		this.controller = ComponentsController;
		this.template ="" +
			"<style>" +
			":root{ --content-app-crud:{width: 1                                     00%; padding: 7px}}" +
			".content{@apply(--content-crud)}" +
			".content > table{width: 100%;border-spacing: none;border-collapse: collapse;}" +
			".content > th  {font-size: 13px;font-weight: normal; padding: 8px;border-bottom:1px solid #000;color: #000;}"+
			".content tbody > tr{ width: 25%; padding: 8px; background: #e8edff; border-bottom: 1px solid #fff;color: #669;border-top: 1px solid transparent; }" +
			".content  tbody > tr:nth-child(even){background:#b9c9fe}"+
			".content  thead > tr{border-bottom:2px solid black}"+
			"</style>" +
			"<div class=\"content\" >" +
				"<h3>{{$ctrl.textBinding}}</h3>" +
				"<div style=\"width: 100%; padding: 3px 7px\">" +
					"<button ng-click=\"$ctrl.toggleTpl()\">Agregar</button>"+
                    "<div id=\"tplContent\" ng-include src=\"$ctrl.currentTpl\"></div>"+
				"</div>"+
				"<table cellpadding='0' >" +
					"<thead>" +
						"<tr>"+
						"<th>nombre</th>"+
						"<th>DNI</th>"+
						"<th>sexo</th>"+
						"<th>operaciones</th>"+
						"</tr>"+
					"</thead>"+
					"<tbody>" +
						"<tr ng-repeat=\"(key, value) in $ctrl.customers\">" +
							"<td>{{value.name}}</td>"+
							"<td>{{value.dni}}</td>"+
							"<td>{{value.sex}}</td>"+
						"</tr>"
					"</tbody>"
				"</table>"
			"</div>";
	}
}

export default new CrudComponents();