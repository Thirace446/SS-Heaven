ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs/lychee/block_interacting/';

    //remove
    event.remove({ output: 'botania:infused_seeds' })
    event.remove({ output: 'botania:dry_seeds' })
    event.remove({ output: 'botania:vivid_seeds' })
    event.remove({ output: 'botania:golden_seeds' })
    event.remove({ output: 'botania:scorched_seeds' })
    event.remove({ output: 'botania:mutated_seeds' })

    event.remove({ output: 'hexerei:mixing_cauldron' })
    


    //item 右键 block 出 item
    const recipes = [
        {
            item_in: { item: 'kubejs:ironwood_wand_one' },
            block_in: 'botania:infused_grass',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'drop_item',
                    item: 'botania:infused_seeds',
                    contextual: {
                        type: 'chance',
                        chance: 0.1}
                },
                {
                    type: 'drop_item',
                    item: 'kubejs:boneshard',
                    contextual: {
                        type: 'chance',
                        chance: 0.2}
                }

            ],
            id: `${id_prefix}infused_seeds`
        },
        {
            item_in: { item: 'kubejs:ironwood_wand_one' },
            block_in: 'botania:dry_grass',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'drop_item',
                    item: 'botania:dry_seeds',
                    contextual: {
                        type: 'chance',
                        chance: 0.1}
                },
                {
                    type: 'drop_item',
                    item: 'kubejs:boneshard',
                    contextual: {
                        type: 'chance',
                        chance: 0.2}
                }

            ],
            id: `${id_prefix}dry_seeds`
        },
        {
            item_in: { item: 'kubejs:ironwood_wand_one' },
            block_in: 'botania:vivid_grass',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'drop_item',
                    item: 'botania:vivid_seeds',
                    contextual: {
                        type: 'chance',
                        chance: 0.1}
                },
                {
                    type: 'drop_item',
                    item: 'kubejs:boneshard',
                    contextual: {
                        type: 'chance',
                        chance: 0.2}
                }

            ],
            id: `${id_prefix}vivid_seeds`
        },
        {
            item_in: { item: 'kubejs:ironwood_wand_one' },
            block_in: 'botania:golden_grass',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'drop_item',
                    item: 'botania:golden_seeds',
                    contextual: {
                        type: 'chance',
                        chance: 0.1}
                },
                {
                    type: 'drop_item',
                    item: 'kubejs:boneshard',
                    contextual: {
                        type: 'chance',
                        chance: 0.2}
                }

            ],
            id: `${id_prefix}golden_seeds`
        },
        {
            item_in: { item: 'kubejs:ironwood_wand_one' },
            block_in: 'botania:scorched_grass',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'drop_item',
                    item: 'botania:scorched_seeds',
                    contextual: {
                        type: 'chance',
                        chance: 0.1}
                },
                {
                    type: 'drop_item',
                    item: 'kubejs:boneshard',
                    contextual: {
                        type: 'chance',
                        chance: 0.2}
                }

            ],
            id: `${id_prefix}scorched_seeds`
        },
        {
            item_in: { item: 'kubejs:ironwood_wand_one' },
            block_in: 'botania:mutated_grass',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'drop_item',
                    item: 'botania:mutated_seeds',
                    contextual: {
                        type: 'chance',
                        chance: 0.1}
                },
                {
                    type: 'drop_item',
                    item: 'kubejs:boneshard',
                    contextual: {
                        type: 'chance',
                        chance: 0.2}
                }

            ],
            id: `${id_prefix}mutated_seeds`
        },
        {
            item_in: { item: 'kubejs:ironwood_wand_one' },
            block_in: 'botania:metamorphic_forest_stone',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'drop_item',
                    item: 'minecraft:clay_ball',
                    contextual: {
                        type: 'chance',
                        chance: 0.1}
                }

            ],
            id: `${id_prefix}clay_ball`
        },
        {
            item_in: { item: 'kubejs:blaze_wand_two' },
            block_in: 'minecraft:netherrack',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'drop_item',
                    item: 'malum:natural_quartz',
                    contextual: {
                        type: 'chance',
                        chance: 0.2}
                },
                {
                    type: 'drop_item',
                    item: 'minecraft:gold_nugget',
                    contextual: {
                        type: 'chance',
                        chance: 0.1}
                },
                {type: 'place', block: 'minecraft:air' ,contextual: { type: 'chance', chance: 0.2}}
            ],
           // post:[  指定维度
              //  {
                  //  type: 'prevent_default',
                  //  contextual: [
                   //     {
                   //         type: 'location',
                   //         predicate: {
                  //              dimension: 'the_end'
                  //          }}
            //],}],
            
            contextual: [{ type: 'is_sneaking', description: 'In the_nether' }],
            id: `${id_prefix}natural_quartz`
        },


       //item 右键 block 变 block
        {
            item_in: { item: 'kubejs:ironwood_wand_one' },
            block_in: 'create:basin',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: 'hexerei:mixing_cauldron'
                }
            ],
            id: `${id_prefix}mixing_cauldron`
        },
        {
            item_in: { item: 'kubejs:ironwood_wand_one' },
            block_in: 'homespun:ironwood_sapling',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: 'malum:runewood_sapling'
                }
            ],
            id: `${id_prefix}runewood_sapling`
        },
        {
            item_in: { item: 'kubejs:crystal_catalyst' },
            block_in: 'minecraft:amethyst_block',
            post: [
                {
                    type: 'place',
                    block: 'minecraft:budding_amethyst'
                }
            ],
            id: `${id_prefix}budding_amethyst`
        }

    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:block_interacting';
        event.custom(recipe).id(recipe.id);
    })
})


