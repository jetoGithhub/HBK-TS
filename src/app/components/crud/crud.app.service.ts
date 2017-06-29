import ICustomer from "./js/customer.interface";

interface ICustomerResource extends ng.resource.IResourceClass<ICustomer>{

	update(ICustomer):ICustomer;
}

interface IServices{
	http(route:string):ng.resource.IResourceClass<any>;
}
export default class DataServices implements IServices{
	static $inject = ["$resource"];
	constructor(private $resource:ng.resource.IResourceService){}

	http(route:string):ng.resource.IResourceClass<any>{
		return <ICustomerResource>this.$resource(route+":id","id:@id",{
			update:{
				method: 'PUT',
				isArray: true
			},
			getOne:{
				method: 'GET',
				isArray: true
			},
			delete:{
				method: 'DELETE',
				isArray: true
			}
		});
	}
}
/*export default function ($resource:ng.resource.IResourceService) : ICustomerResource{

	var updateAction : ng.resource.IActionDescriptor = {
		method: 'PUT',
		isArray: true
	};

	return <ICustomerResource>$resource("http://localhost:3000/customer/:id","id:@id",{
		 update:updateAction,
		 getOne:{
			 method: 'GET',
			 isArray: true
		 },
		delete:{
			method: 'DELETE',
			isArray: true
		}
	});
}*/