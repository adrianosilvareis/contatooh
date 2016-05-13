var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

//ObjectID de algum contato existente
var idProcurado = new ObjectID('5734a288d2794607ff29ed10');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
	function(erro, db){
		if(erro) throw err;
		db.collection('contatos').findOne({_id:idProcurado},
			function(erro, contato){
				if(erro) throw err;
				console.log(contato);
			}
		);
	}
);