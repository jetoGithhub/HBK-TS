import Customer from './js/customer.interface';
import CrudFactory from "./crud.app.factory";
export default class{
	static $inject = ['CRUDFactory','$window','$scope',"$state"];
	public currentTpl:string = '';
	public customer:Customer;
	public customers:Array<Customer> = [];
	public url:string;
	public path:string;
	constructor(private CRUDFactory:any, private $window:any, private $scope:any,private $state:any) {}
	$onInit():void {
		this.CRUDFactory.url = this.url;
		this.getAll();
	}
	getAll(){
		this.CRUDFactory.getAll().then((customers:Array<Customer>)=>{
			this.customers =customers;
		}).catch((err:any[]) => {
			console.log('error','\n',err);
		});
	}
	create(){
		this.$state.go(this.path+'Create');
	}

	delete(dni:number){
		this.CRUDFactory.delete(dni).then((customers:Array<Customer>)=>{
			this.customer= <Customer>{};
			this.getAll();
		}).catch((err:any[]) => {
			console.log('error','\n',err);
		});
	}
	edit(dni:number){
		this.$state.go(this.path+'Details',{dni:dni},{reload:true});
	}

}