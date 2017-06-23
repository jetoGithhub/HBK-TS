export default class{
    public textBinding:string;
	public dataBinding:any[];
	public storeResource:any;
	static $inject = ['crudAppServices'];
	constructor(private crudAppServices:any) {
		this.storeResource = crudAppServices.getStoreResource();
		this.textBinding = 'Aqui va a ir la grilla';
		this.dataBinding = [];
		this.storeResource.query().$promise.then((data:string[])=>{
			this.dataBinding = data;
		}).catch((err:any[]) => {
			console.log('error','\n',err);
		});
	}

	setData(){
		console.info('add data..');
		//this.dataBinding.push({name:'kjdhfjkshjfksdk'});

		this.dataBinding.push(
			{
				name:'kjdhfjkshjfksdk',
				dni:'kjdhfjkshjfksdk',
				sex:'kjdhfjkshjfksdk'
			}
		);

	}

	getData(){

	}

	getDataById(){

	}

}