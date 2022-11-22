module.exports.buscar = async function(application, req, res){
    let pokemon = req.body.search;
    let search = pokemon.toLowerCase();

    try{
        const pokeDados = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(response => {
            if(!response.ok){
                if(response.status = 404){
                    res.render('pokemon/notFound', {pokemon: pokemon});
                } else {
                    throw new Error(`Error status: ${response.status}`)
                }
            }

            return response.json();
        });

        res.render('pokemon/response', {pokemon : pokemon, pokeDados: pokeDados});
        
    } catch (err) {
        console.log(`Error: , ${err.message}`);
    }
}