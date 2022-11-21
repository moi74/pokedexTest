module.exports.buscar = function(application, req, res){
    let pokemon = req.body;
    console.log(pokemon.search)

    res.render('pokemon/response', {teste : pokemon.search})
}