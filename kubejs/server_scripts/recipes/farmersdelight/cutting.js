ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs/farmersdelight/cutting/';

    //remove 
    event.remove({ output: 'homespun:crushing_tub' })

    const recipes = [
        {
            ingredients: [{ item: 'homespun:ironwood_log' }],
            result: [{ item: 'homespun:stripped_ironwood_log' }, { item: 'farmersdelight:tree_bark' }],
            tool: { tag: 'forge:tools/axes' },
            id: `${id_prefix}tree_bark`
        },
        {
            ingredients: [{ item: 'homespun:stripped_ironwood_log' }],
            result: [{ item: 'homespun:crushing_tub' }],
            tool: { item: 'kubejs:ironwood_wand_one' },
            id: `${id_prefix}crushing_tub`
        },
        {
            ingredients: [{ item: 'minecraft:cobblestone' }],
            result: [{ item: 'minecraft:gravel' }],
            tool: { item: 'kubejs:ironwood_wand_one' },
            id: `${id_prefix}gravel`
        },

    ];

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cutting';
        event.custom(recipe).id(recipe.id);
    });
});
