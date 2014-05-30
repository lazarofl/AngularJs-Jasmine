var app = angular.module('app', []);
app.run(function($httpBackend){
	
	$httpBackend.whenGET('/listadecompras').respond(
		[	{
				nome: 'Pão',
				quantidade: 2,
				comprado: false
			},
			{
				nome: 'Manteiga',
				quantidade: 1,
				comprado: false
			},
			{
				nome: 'Leite',
				quantidade: 1,
				comprado: false
			},
			{
				nome: 'Café',
				quantidade: 2,
				comprado: false
			},
			{
				nome: 'Açúcar',
				quantidade: 1,
				comprado: false
			}
		]
	);

	this.newGuid = function () {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
	};

	$httpBackend.whenPOST('/listadecompras').respond(function(method, url, data){
		var json = angular.fromJson(data);
		json.Id = newGuid();
		return [200, json];
	});

	$httpBackend.whenPUT('/listadecompras').respond(function(method, url, data){
		var json = angular.fromJson(data);
		return [200, json];
	});

	$httpBackend.whenDELETE('/listadecompras').respond(function(method, url, data){
		return [200,{}];
	});

});