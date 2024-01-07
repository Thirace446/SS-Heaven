ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs/create/item_application/';

    event.remove({ output: 'create:andesite_casing' })
    event.remove({ output: 'create:copper_casing' })
    event.remove({ output: 'create:brass_casing' })
    event.remove({ output: 'create:railway_casing' })

    const recipes = [
        {
            ingredients: [{ item: 'homespun:stripped_ironwood_log' }, { item: 'create:andesite_alloy' }],
            results: [{ item: 'create:andesite_casing' }],
            id: `${id_prefix}andesite_casing`
        },
        {
            ingredients: [{ item: 'homespun:stripped_ironwood_log' }, { item: 'minecraft:copper_ingot' }],
            results: [{ item: 'create:copper_casing' }],
            id: `${id_prefix}copper_casing`
        },
        {
            ingredients: [{ item: 'malum:stripped_runewood_log' }, { item: 'create:brass_ingot' }],
            results: [{ item: 'create:brass_casing' }],
            id: `${id_prefix}brass_casing`
        },
        {
            ingredients: [{ item: 'homespun:stripped_ironwood_log' }, { item: 'create:sturdy_sheet' }],
            results: [{ item: 'create:railway_casing' }],
            id: `${id_prefix}railway_casing`
        },
        {
            ingredients: [{ item: 'malum:stripped_runewood_log' }, { item: 'kubejs:ingot_dawnstone' }],
            results: [{ item: 'kubejs:dawnstone_casing' }],
            id: `${id_prefix}dawnstone_casing`
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:item_application';
        event.custom(recipe).id(recipe.id);
    });
});
