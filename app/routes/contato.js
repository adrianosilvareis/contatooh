module.exports = function(app){
	var controller = app.controller.contato;
	app.route('/contatos')
		.get(controller.listarTodos)
		.post(controller.salvaContato);

	app.route('/contatos/:id')
		.get(controller.obtemContato)
		.delete(controller.removeContato);
}