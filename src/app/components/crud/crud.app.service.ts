interface IDataAccessService {
	getStoreResource(): ng.resource.IResourceClass<IStoreResource>;
}
interface IStoreResource extends ng.resource.IResource<string[]> { }

export default class DataAccessService implements IDataAccessService {
	static $inject = ["$resource"];
	constructor(private $resource: ng.resource.IResourceService) { }

	getStoreResource(): ng.resource.IResourceClass<IStoreResource> {
		return this.$resource("/api/stores.json","id:@id",{'query':{method:'GET', isArray:true}});
	}
}