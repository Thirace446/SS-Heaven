ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs/ars_nouveau/crush/';

    event.remove({ id: 'ars_nouveau:crush_stone' })
    event.remove({ id: 'ars_nouveau:crush_cobblestone' })
    event.remove({ id: 'ars_nouveau:crush_gravel' })
    event.remove({ id: 'ars_nouveau:crush_sand' })

    const recipes = [
        {
            input: { item: 'minecraft:cobblestone' },
            output: [{ chance: 1.0, count: 1, item: 'minecraft:gravel' }],
            id: `${id_prefix}gravel`
        },
        {
            input: { item: 'minecraft:gravel' },
            output: [{ chance: 1.0, count: 1, item: 'minecraft:sand' }],
            id: `${id_prefix}sand`
        },
        {
            input: { item: 'minecraft:raw_iron' },
            output: [{ chance: 1.0, count: 2, item: 'create:crushed_raw_iron' }],
            id: `${id_prefix}crushed_raw_iron`
        },
        {
            input: { item: 'malum:natural_quartz' },
            output: [{ chance: 1.0, count: 4, item: 'kubejs:natural_quartz_seeds' }],
            id: `${id_prefix}natural_quartz_seeds`
        },
        {
            input: { item: 'minecraft:andesite' },
            output: [{ chance: 1.0, count: 1, item: 'minecraft:cobblestone' }],
            id: `${id_prefix}cobblestone`
        }
        
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:crush';
        event.custom(recipe).id(recipe.id);
    });
});
