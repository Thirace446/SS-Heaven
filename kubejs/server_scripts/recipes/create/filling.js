ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs/create/filling/';



    const recipes = [
        {
            results: [{ item: 'malum:runewood_planks' }],
            ingredients: [{ item: 'homespun:ironwood_planks' }, { fluid: 'kubejs:runefluid', amount: 500 }],
            id: `${id_prefix}runewood_planks`
        },
        {
            results: [{ item: 'malum:holy_sap' }],
            ingredients: [{ item: 'minecraft:glass_bottle' }, { fluid: 'kubejs:runefluid', amount: 250 }],
            id: `${id_prefix}holy_sap`
        },
        {
            results: [{ item: 'malum:aqueous_spirit' }],
            ingredients: [{ item: 'malum:infernal_spirit' }, { fluid: 'kubejs:manafluid', amount: 125 }],
            id: `${id_prefix}aqueous_spirit`
        },
        {
            results: [{ item: 'kubejs:mana_orb' }],
            ingredients: [{ item: 'kubejs:glass_orb' }, { fluid: 'kubejs:manafluid', amount: 1000 }],
            id: `${id_prefix}mana_orb`
        },
        
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:filling';
        event.custom(recipe).id(recipe.id);
    });
});
