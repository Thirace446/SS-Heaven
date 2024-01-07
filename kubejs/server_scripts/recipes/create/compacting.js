ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs/create/compacting/';
    const recipes = [

        {
            ingredients: [
                { item: 'homespun:ironberries' },
            ],
            results: [{ fluid: 'homespun:ironberry_juice', amount: 375 }],
            id: `${id_prefix}ironberry_juice`
        },
        {
            ingredients: [
                { item: 'malum:runewood_log' },
            ],
            results: [{ fluid: 'kubejs:runefluid', amount: 125 }],
            id: `${id_prefix}runefluid1`
        },
        {
            ingredients: [
                { item: 'malum:exposed_runewood_log' },
            ],
            results: [{ fluid: 'kubejs:runefluid', amount: 500 }],
            id: `${id_prefix}runefluid2`
        },
        
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:compacting';
        event.custom(recipe).id(recipe.id);
    });
});
