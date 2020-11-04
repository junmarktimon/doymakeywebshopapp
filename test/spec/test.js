// for testing

(function () { 
'use strict'; 
describe('sample tests', function () { 
describe('our first Jasmine tests', function () {
 it('should succeed', function () { 
expect(true).toBe(true); 
}); 
}); 
}); 
})();







// for final testing webshop app

describe('web app tests', function () {
	describe('shopping cart controller', function () {
		 beforeEach(module('shopApp'));
		 var $controller;
		 beforeEach(inject(function(_$controller_) {
			$controller = _$controller_;
		 }));

		it('should update the line sub total when a product is added', function() {
			 var $scope = {};
			 var controller = $controller('shoppingCartController', { $scope: $scope });
			 $scope.lines[0].number = 2;
			 expect($scope.lines[0].subTotal()).toBe('111.98');
		 });

		it('should update the order total when a product is added', function() {
			 var $scope = {};
			 var controller = $controller('shoppingCartController', { $scope: $scope });
			 $scope.lines[0].number = 2;
			 expect($scope.total()).toBe('213.96');
		});

	 });
});
