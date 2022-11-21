module.exports = function(application){
    application.post('/buscar', function(req, res){
        application.app.controllers.pokemon.buscar(application, req, res);
    })
}