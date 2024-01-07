ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs/create/mixing/';



    const recipes = [

        {
            results: [ { item: 'malum:aqueous_spirit', count: 3 }],
            ingredients: [ { item: 'malum:aqueous_spirit' }, { amount: 250, fluid: 'kubejs:manafluid' }],
            heatRequirement: 'heated',
            id: `${id_prefix}manafluid1`
        },
        {
            results: [{ fluid: 'kubejs:manafluid' , amount: 1000,} ],
            ingredients: [{ item: 'botania:infused_seeds' , }, { amount: 1000, fluid: 'minecraft:water' }],
            //heatRequirement: 'heated','superheated'
            id: `${id_prefix}manafluid2`
        }

    ]


    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
