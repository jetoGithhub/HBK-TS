import {angular} from "../../../globals";
interface Customer{
	name:string;
	dni:number;
	sex:string
}
export default class{
    public textBinding:string;
	public dataBinding:any[];
	public storeResource:any;
	public currentTpl:string = '';
	public customer:Customer;
	static $inject = ['crudAppServices'];
	constructor(private crudAppServices) {
		//this.storeResource = crudAppServices.getStoreResource();
		this.customers = [];
		this.customer = {};
		window.setTimeout(()=>{
			crudAppServices.query().$promise.then((data:string[])=>{
				this.customers = data;
			}).catch((err:any[]) => {
				console.log('error','\n',err);
			});
		}, 1500)
		
	}
	toggleTpl(){
		if(document.querySelector("#tplContent")){
				console.log(this);
				this.currentTpl = '';
				document.querySelector("#tplContent").innerHTML='';
		}else {
			this.currentTpl = '/frmcustomer.html'
		}
	}
	create(valid){
		console.info('add data..',this.customer);
		let data = window.angular.copy(this.customer);
		//this.dataBinding.push({name:'kjdhfjkshjfksdk'});
		if(valid) {
			this.customers.push(data);
		}
	}

	getData(){

	}

	getDataById(){

	}

}