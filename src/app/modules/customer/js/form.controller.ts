export default function ($scope:any,CRUDFactory:any,$state:any) {
	let dni = $state.params.dni || null;
	/**
	 *
	 *
	 */
	let update = function () {
			CRUDFactory.edit($scope.crudUrl,$state.params.dni,$scope.customer).then((customer:any)=>{
				$state.go('customers');
			});
	}
	/**
	 *
	 */
	let create = function () {
		CRUDFactory.create($scope.crudUrl,$scope.customer).then((customer:any)=>{
			$state.go('customers');
		});
	}
	$scope.crudUrl = 'http://localhost:3000/customer/';
	$scope.hashState = 'customers';
	$scope.customer = {};
	$scope.isUpdate = dni? true : false;
	console.log('isUpdate', $scope.isUpdate)
	/**
	 *
	 * @param valid
	 */
	$scope.processForm = function (valid:any) {
		if(valid){
			dni? update() : create();
		}
	}

	if(dni) {
		CRUDFactory.getOne($scope.crudUrl, dni).then((customer: any) => {
			$scope.customer = customer[0];
		});
	}


}