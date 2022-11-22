module.exports.buscar = async function(application, req, res){
    let pokemon = req.body.search;

    try{
        const pokeDados = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json());

        if(!pokeDados || pokeDados == 'Not Found'){
            res.send('Pokemon não encontrado!');
        } else {
            res.render('pokemon/response', {pokemon : pokemon, pokeDados: pokeDados});
        }
    } catch (err) {
        console.log('Error: ', err.message);
    }
}