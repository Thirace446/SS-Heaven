
StartupEvents.registry('item', (event) => {
    const items = [

        'blank_botanic_rune',

        'stamp_bar',
        'bar_stamp_raw',
        'stamp_gear',
        'gear_stamp_raw',
        'blend_caminite',
        'brick_caminite',
        'ancient_motive_core',
        'aspectus_dawnstone',
        'crystal_ember',
        'dust_ember',
        'ember_crystal_cluster',
        'gear_dawnstone',
        'ingot_dawnstone',
        'nugget_dawnstone',
        'plate_dawnstone',
        'shard_ember',
        'ironwood_wand_one',
        'blaze_wand_two',
        'sapphire',
        'boneshard',
        'mana_berry',
        'yelloww_berry',
        'redd_berry',
        'greenn_berry',
        'diamond_nugget',
        'allseeds_stew',
        'wcdonalds',
        'natural_quartz_seeds',
        'mana_orb',
        'glass_orb',
        'devil_dust',
        'crystal_catalyst'
        


    ];


    items.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    })
});



