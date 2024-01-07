ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs/minecraft/shaped/';

    //remove
    event.remove({ output: 'minecraft:chest' })
    event.remove({ output: 'minecraft:barrel' })
    
    event.remove({ output: 'create:millstone' })
    event.remove({ output: 'create:wrench' })
    event.remove({ output: 'create:basin' })

    event.remove({ input: 'homespun:tiny_iron_dust' })

    //



    const recipes = [
        //kubejs item
        {
            output: 'kubejs:ironwood_wand_one',
            pattern: [
                '  A', 
                ' A ', 
                'B  '
            ],
            key: {
                A: 'minecraft:stick',
                B: 'homespun:ironwood_planks'
            },
            id: `heavens:ironwood_wand_one`
        },
        {
            output: 'kubejs:blaze_wand_two',
            pattern: [
                '  A', 
                ' B ', 
                'B  '
            ],
            key: {
                A: 'malum:infernal_spirit',
                B: 'minecraft:blaze_rod'
            },
            id: `heavens:blaze_wand_two`
        },
        {
            output: '4x kubejs:crystal_catalyst',
            pattern: [
                'ABA', 
                'BCB', 
                'ABA'
            ],
            key: {
                A: 'kubejs:devil_dust',
                B: 'minecraft:blaze_powder',
                C: 'malum:arcane_spirit'
            },
            id: `kubejs:crystal_catalyst`
        },

        //minecraft item
        {
            output: 'minecraft:diamond',
            pattern: [
                'AAA', 
                'AAA', 
                'AAA'
            ],
            key: {
                A: 'kubejs:diamond_nugget'
            },
            id: `minecraft:diamond`
        },
        {
            output: 'minecraft:raw_iron',
            pattern: [
                'AAA', 
                'AAA', 
                'AAA'
            ],
            key: {
                A: 'homespun:tiny_iron_dust'
            },
            id: `minecraft:raw_iron`
        },
        {
            output: 'minecraft:furnace',
            pattern: [
                'AAA', 
                'A A', 
                'AAA'
            ],
            key: {
                A: 'botania:metamorphic_forest_cobblestone'
            },
            id: `minecraft:furnace`
        },
        {
            output: 'minecraft:chest',
            pattern: [
                'AAA', 
                'ABA', 
                'AAA'
            ],
            key: {
                A: '#minecraft:planks',
                B: 'create:andesite_alloy'
            },
            id: `minecraft:chest`
        },
        {
            output: 'minecraft:barrel',
            pattern: [
                'ABA', 
                'ACA', 
                'ABA'
            ],
            key: {
                A: '#minecraft:planks',
                B: '#minecraft:wooden_slabs',
                C: 'create:andesite_alloy'
            },
            id: `minecraft:barrel`
        },


        //create item
        {
            output: 'create:wrench',
            pattern: [
                'AA ', 
                'AB ', 
                ' C '
            ],
            key: {
                A: 'create:golden_sheet',
                B: 'create:cogwheel',
                C: 'kubejs:ironwood_wand_one'
            },
            id: `create:wrench`
        },
        {
            output: 'create:basin',
            pattern: [
                '   ', 
                'A A', 
                'ABA'
            ],
            key: {
                A: 'minecraft:iron_ingot',
                B: 'homespun:crushing_tub'
            },
            id: `create:basin`
        },
        {
            output: 'create:millstone',
            pattern: [
                ' A ', 
                ' B ', 
                ' C '
            ],
            key: {
                A: 'create:cogwheel',
                B: 'create:andesite_casing',
                C: 'minecraft:polished_andesite'
            },
            id: `create:millstone`
        },


        //malum items
        {
            output: 'malum:spirit_altar',
            pattern: [
                ' A ', 
                'BCB', 
                'DDD'
            ],
            key: {
                A: 'kubejs:mana_orb',
                B: 'create:brass_ingot',
                C: 'create:brass_casing',
                D: 'malum:runewood_planks'
            },
            id: `malum:spirit_altar`
        },


        

        
        
        


    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
