"use strict";
interface ICustomer extends ng.resource.IResource<ICustomer> {
	name:string;
	sex:string;
	dni:number;
}

export default ICustomer;