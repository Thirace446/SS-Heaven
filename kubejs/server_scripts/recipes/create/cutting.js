ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs/create/cutting/';

    event.remove({ output: 'malum:runewood_planks' })

    const recipes = [
        {
            ingredients: [{ item: 'malum:stripped_runewood_log' }],
            results: [{ item: '6x malum:runewood_planks' }],
            processingTime: 100,
            id: `${id_prefix}runewood_planks`
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:cutting';
        event.custom(recipe).id(recipe.id);
    });
});
