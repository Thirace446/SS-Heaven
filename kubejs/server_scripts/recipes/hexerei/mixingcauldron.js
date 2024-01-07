ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs/hexerei/mixingcauldron/';

    event.remove({ output: 'create:andesite_alloy' })
    event.remove({ output: 'hexerei:pestle_and_mortar' })
    event.remove({ output: 'minecraft:blast_furnace' })
    event.remove({ output: 'hexerei:mahogany_broom' })
    event.remove({ output: 'hexerei:witch_hazel_broom' })
    event.remove({ output: 'hexerei:willow_broom' })


    const recipes = [
        {
            output: '8x create:andesite_alloy',
            inputs: [
                'minecraft:andesite',
                'minecraft:andesite',
                'minecraft:andesite',
                'minecraft:andesite',
                'minecraft:andesite',
                'minecraft:andesite',
                'minecraft:andesite',
                'minecraft:andesite'
            ],
            liquid: { fluid: 'homespun:ironberry_juice' },
            liquidOutput: { fluid: 'homespun:ironberry_juice' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}iron_ingot`
        },
        {
            output: 'hexerei:pestle_and_mortar',
            inputs: [
                'create:shaft',
                'create:andesite_alloy',
                'botania:metamorphic_mountain_stone',
                'botania:metamorphic_mountain_stone',
                'botania:metamorphic_mountain_stone',
                'botania:metamorphic_mountain_stone',
                'botania:metamorphic_mountain_stone',
                'create:andesite_alloy'
            ],
            liquid: { fluid: 'kubejs:yellowfluid' },
            liquidOutput: { fluid: 'kubejs:yellowfluid' },
            fluidLevelsConsumed: 500,
            heatRequirement: 'heated',
            id: `${id_prefix}pestle_and_mortar`
        },
        {
            output: 'minecraft:blast_furnace',
            inputs: [
                'minecraft:furnace',
                'create:andesite_alloy',
                'botania:metamorphic_desert_stone',
                'botania:metamorphic_desert_stone',
                'botania:metamorphic_desert_stone',
                'botania:metamorphic_desert_stone',
                'botania:metamorphic_desert_stone',
                'create:andesite_alloy'
            ],
            liquid: { fluid: 'kubejs:redfluid' },
            liquidOutput: { fluid: 'kubejs:redfluid' },
            fluidLevelsConsumed: 500,
            heatRequirement: 'heated',
            id: `${id_prefix}blast_furnace`
        },
        {
            output: '3x kubejs:diamond_nugget',
            inputs: [
                'minecraft:charcoal',
                'minecraft:charcoal',
                'minecraft:charcoal',
                'minecraft:charcoal',
                'minecraft:charcoal',
                'minecraft:charcoal',
                'minecraft:charcoal',
                'minecraft:charcoal'
            ],
            liquid: { fluid: 'kubejs:manafluid' },
            liquidOutput: { fluid: 'kubejs:manafluid' },
            fluidLevelsConsumed: 125,
            heatRequirement: 'heated',
            id: `${id_prefix}diamond_nugget`
        },
        {
            output: 'hexerei:mahogany_broom',
            inputs: [
                'create:andesite_alloy',
                'homespun:stripped_ironwood_log',
                'hexerei:blood_bottle',
                'minecraft:wheat',
                'hexerei:mandrake_root',
                'minecraft:wheat',
                'hexerei:blood_bottle',
                'homespun:stripped_ironwood_log'
                
            ],
            liquid: { fluid: 'kubejs:purplefluid' },
            liquidOutput: { fluid: 'kubejs:purplefluid' },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}mahogany_broom`
        },
        

 
        

    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:mixingcauldron';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
