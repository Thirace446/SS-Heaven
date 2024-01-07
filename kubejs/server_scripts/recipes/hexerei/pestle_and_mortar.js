ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs/hexerei/pestle_and_mortar/';

    event.remove({ id: 'create:smelting/iron_ingot_from_crushed' })
    event.remove({ id: 'farmersdelight:cutting/stone' })

    const recipes = [
        {
            inputs: [
                'minecraft:raw_iron',
                'minecraft:raw_iron',
                'minecraft:raw_iron',
                'minecraft:raw_iron',
                'minecraft:raw_iron'
            ],
            output: '10x create:crushed_raw_iron',
            grindingTime: 10 * 20,
            id: `${id_prefix}crushed_raw_iron`
        },
        {
            inputs: [
                'malum:natural_quartz',
                'malum:natural_quartz',
                'malum:natural_quartz',
                'malum:natural_quartz',
                'malum:natural_quartz'
            ],
            output: '20x kubejs:natural_quartz_seeds',
            grindingTime: 5 * 20,
            id: `${id_prefix}quartz_seed`
        },
        {
            inputs: [
                'minecraft:andesite',
                'minecraft:andesite',
                'minecraft:andesite',
                'minecraft:andesite',
                'minecraft:andesite'
            ],
            output: '5x minecraft:cobblestone',
            grindingTime: 5 * 20,
            id: `${id_prefix}cobblestone`
        },
        
        //{
            //inputs: [
                //'minecraft:netherrack',
                //'minecraft:netherrack',
                //'minecraft:netherrack',
                //'minecraft:netherrack',
                //'minecraft:netherrack'
            //],
            //output: '10x create:cinder_flour',
            //grindingTime: 5 * 20,
            //id: `${id_prefix}cinder_flour`
        //},
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:pestle_and_mortar';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
