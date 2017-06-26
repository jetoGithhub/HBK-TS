
interface ICustomerResource extends ng.resource.IResourceClass<ICustomer>{

	update(ICustomer):ICustomer;
}

interface ICustomer extends ng.resource.IResource<ICustomer> {
	name:string;
	firstname:number;
	dni:string;
}
export default function ($resource:ng.resource.IResourceService) : ICustomerResource{

	var updateAction : ng.resource.IActionDescriptor = {
		method: 'PUT',
		isArray: false
	};

	return <ICustomerResource>$resource("/api/stores.json","id:@id",{
		 update:updateAction
	});
}