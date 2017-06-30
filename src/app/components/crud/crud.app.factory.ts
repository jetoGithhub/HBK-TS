interface ICRudFactory{
	getAll(url:string):void;
	getOne(url:string,id:number):void;
	edit(url:string,id:number,data:Array<T>):void;
	create(url:string,data:Array<T>):void;
	delete(url:string,id:number):void
}

class CrudFactory implements  ICRudFactory{
	public service:any;
	private _url:string = '';
	constructor(private crudAppServices:any){
		this.service = crudAppServices;
	}
	getAll(){
		return this.service.http(this.url).query().$promise;
	}
	getOne(id:number){
		return this.service.http(this.url).getOne({id:id}).$promise;
	}
	edit(id:number,data:Array<T>){
		return this.service.http(this.url).update({id:id},data).$promise;
	}
	create(data:Array<T>){
		return this.service.http(this.url).save(data).$promise;
	}
	delete(id:number){
		return this.service.http(this.url).delete({id:id}).$promise;
	}
	set url(value:string){
		this._url = value;
	}
	get url(){
		return this._url;
	}
}

export default CrudFactory;