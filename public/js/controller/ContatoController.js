angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, Contato){
	

	if($routeParams.contatoId) {	
		Contato.get({id: $routeParams.contatoId},
		function(contato){
			$scope.contato = contato;
		},
		function(erro){
			$scope.mesagem = {
				texto: 'Não foi possível obter o contato.'
			};
			console.log(erro);
		});
	}else{
		$scope.contato = new Contato();		
	}


	$scope.salva = function(){
		//logica de salvamento
		$scope.contato.$save()
			.then(function() {
				$scope.mesagem = {texto: "Salvo com sucesso"};
				//limpa o contato
				$scope.contato = new Contato();
			})
			.catch(function(erro){
				$scope.mensagem = {texto: "Não foi possível salvar"};
			});
	};

	Contato.query(function(contatos) {
		$scope.contatos = contatos;
	})
	
});