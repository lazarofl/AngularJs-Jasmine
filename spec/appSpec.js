describe('Service: ComprasService', function () {

  var ComprasService, $httpBackend;

  beforeEach(function(){
	  module('app');
  	inject(function($injector){
  		ComprasService = $injector.get('ComprasService');
  		$httpBackend = $injector.get('$httpBackend');
  	});
  });

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
  });

  describe('ComprasService', function(){
	
	it('Não pode ser nulo ou undefined', function(){
		expect(ComprasService).not.toBe(null); 
		expect(ComprasService).toBeDefined(); 
	});
	
	describe('Total de itens na lista de compras',function(){
		it('deve retornar 5', function () {

	    	ComprasService.ObterListaDeCompras().then(function (result){
      			expect(result.data.length).toEqual(5);
	    	});

	    	$httpBackend.flush();
	  	});
	});

	describe('Ao adicionar um novo item na lista de compras',function(){
		
		it('deve retornar o objeto com o novo ID', function () {

			var item = {
				nome: 'novo item',
				quantidade: 1,
				comprado: false
			};

	    	ComprasService.Adicionar(item).then(function (result){
      			expect(result.data.Id).not.toBe(null);
      			expect(result.data.Id).not.toBe('');
      			expect(result.data.Id).toBeDefined();
	    	});

	    	$httpBackend.flush();
	  	});
	});


	describe('Ao marcar ou desmarcar um novo item na lista de compras',function(){
		
		it('deve salvar a propriedade "comprado" com o novo valor', function () {

		  var item = {
				id: '12345',
				nome: 'novo item',
				quantidade: 1,
				comprado: true
			};

	    	ComprasService.Atualizar(item).then(function (result){
      			expect(result.data.comprado).toBe(item.comprado);
      			expect(result.data.id).toBe(item.id);
	    	});

	    	$httpBackend.flush();
	  	});
	});

	describe('Ao remover um item na lista de compras',function(){
		
		it('deve obter status 200 do servidor', function () {

			var item = {
				id: '12345',
				nome: 'novo item',
				quantidade: 1,
				comprado: true
			};

	    	ComprasService.Remover(item).then(function (result){
      			expect(result.status).toBe(200);
	    	});

	    	$httpBackend.flush();
	  	});
	});

  });

});
