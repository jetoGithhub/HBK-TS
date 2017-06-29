interface ICRudFactory{
	getAll(url:string):void;
	getOne(url:string,id:number):void;
	edit(url:string,id:number,data:Array<T>):void;
	create(url:string,data:Array<T>):void;
	delete(url:string,id:number):void
}

class CrudFactory implements  ICRudFactory{
	public service:any;
	constructor(private crudAppServices:any, private _url:string){
		this.service = crudAppServices;
	}
	getAll(url:string){
		this.crudAppServices.http(this.url).query().$promise;
	}
	getOne(url:string,id:number){
		return this.service.http(url).getOne({id:id}).$promise;
	}
	edit(url:string,id:number,data:Array<T>){
		return this.service.http(url).update({id:id},data).$promise;
	}
	create(url:string,data:Array<T>){
		return this.service.http(url).save(data).$promise;
	}
	delete(url:string,id:number){
		this.crudAppServices.http(url).delete({id:id}).$promise;
	}
	set url(value:string){
		this._url = value;
	}
}

export default CrudFactory;