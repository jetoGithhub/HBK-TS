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
			":root{ --content-app-crud:{width: 100%; padding: 7px}}" +
			".content{@apply(--content-crud)}" +
			".content > table{width: 100%;border-spacing: none}" +
			".content thead > tr {border-bottom: 2px solid black}"+
			".content tbody > tr { width: 25%; padding: 3px; background: #dcdcdc;}" +
			"tr{border: none; border-bottom-width: 1px; border-bottom-color: black; border-bottom-style: solid}"+
			".content  tbody > tr:nth-child(even){background:darkgrey}"+
			"</style>" +
			"<div class=\"content\" >" +
				"<h3>{{$ctrl.textBinding}}</h3>" +
				"<div style=\"width: 100%; padding: 3px 7px\">" +
					"<button ng-click=\"$ctrl.setData()\">Agregar</button>"+
				"</div>"+
				"<table>" +
					"<thead>" +
						"<tr>"+
						"<th>nombre</th>"+
						"<th>DNI</th>"+
						"<th>sexo</th>"+
						"<th>operaciones</th>"+
						"</tr>"+
					"</thead>"+
					"<tbody>" +
						"<tr ng-repeat=\"(key, value) in $ctrl.dataBinding\">" +
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