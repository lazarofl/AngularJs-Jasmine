angular.module('app').service('ComprasService', ['$http', function ($http) {

	this.ObterListaDeCompras = function() {
    return $http.get('/listadecompras').then(function(response) {
          return response || null;
      }, function(response) {
          switch(response.status)
          {
              default:
              throw 'nenhuma informação';
          }
      });
	};

	this.Adicionar = function(item) {
    if(!!!item || !!!item.nome || !!!item.quantidade)
      throw 'item não está definido';
    
    return $http.post('/listadecompras', item).then(function(response) {
          return response || null;
      }, function(response) {
          switch(response.status)
          {
              default:
              throw 'nenhuma informação';
          }
      });
	};

	this.Atualizar = function(item) {
    return $http.put('/listadecompras', item).then(function(response) {
          return response || null;
      }, function(response) {
          switch(response.status)
          {
              default:
              throw 'nenhuma informação';
          }
      });
	};

	this.Remover = function(item) {
    return $http.delete('/listadecompras', item).then(function(response) {
          return response || null;
      }, function(response) {
          switch(response.status)
          {
              default:
              throw 'nenhuma informação';
          }
      });
	};

}]);
