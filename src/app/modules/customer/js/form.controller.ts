export default function ($scope:any,CRUDFactory:any,$state:any) {
	let dni = $state.params.dni || null;
	/**
	 *
	 *
	 */
	let update = function () {
			CRUDFactory.edit($state.params.dni,$scope.customer).then((customer:any)=>{
				$state.go('customers');
			});
	}
	/**
	 *
	 */
	let create = function () {
		CRUDFactory.create($scope.customer).then((customer:any)=>{
			$state.go('customers');
		});
	}
	/**
	 *
	 */
	let getCustomer = function () {
		CRUDFactory.getOne(dni).then((customer: any) => {
			$scope.customer = customer[0];
		});
	}
	$scope.customer = {};
	$scope.isUpdate = dni? true : false;
	/**
	 *
	 * @param valid
	 */
	$scope.processForm = function (valid:any) {
		if(valid){
			dni? update() : create();
		}
	}

	if(dni) getCustomer();


}