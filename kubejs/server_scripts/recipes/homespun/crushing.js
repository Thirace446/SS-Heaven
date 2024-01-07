ServerEvents.recipes(event => {

    const id_prefix = 'kubejs/homespun/tub_crushing/';

    //remove
    //event.remove({ output: '1' })

    const recipes = [
        {
        input_item: { item: 'minecraft:netherrack' ,count: 1},
        output_item: { item: 'minecraft:air' },
        fluid_stack: { fluid: 'minecraft:lava', amount: 125 },
        id: `${id_prefix}lava`
        },
        {
        input_item: { item: 'homespun:ironwood_leaves' ,count: 1},
        output_item: { item: 'minecraft:air' },
        fluid_stack: { fluid: 'minecraft:water', amount: 125 },
        id: `${id_prefix}water`
        },
        {
        input_item: { item: 'malum:revealed_runewood_log' ,count: 1},
        output_item: { item: 'minecraft:air' },
        fluid_stack: { fluid: 'kubejs:runefluid', amount: 125 },
        id: `${id_prefix}runefluid`
        },

        


    ]
recipes.forEach((recipe) => {
    recipe.type = 'homespun:tub_crushing';
    event.custom(recipe).id(recipe.id);
})
});


   // {
    //input_item: { item:'homespun:ironwood_leaves' ,count: 1},
    //output_item: { item: 'minecraft:air' },
   // fluid_stack: { fluid: 'minecraft:water', amount: 125 },
   // id: `${id_prefix}water`
   // },
