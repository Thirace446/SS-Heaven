ServerEvents.recipes(event => {

    const id_prefix = 'kubejs/malum/spirit_infusion/';

    //remove'
    event.remove({ output: 'ars_nouveau:novice_spell_book' })
    event.remove({ output: 'ars_nouveau:magebloom_crop' })
    event.remove({ output: 'ars_nouveau:imbuement_chamber' })

    

    const recipes = [
        {
            extra_items: [{ item: 'ars_nouveau:blank_parchment' }],
            input: { item: 'minecraft:writable_book' },
            output: { item: 'ars_nouveau:novice_spell_book' },

            //类型 sacred spirit arcane eldritch earthen infernal aerial aqueous wicked

            spirits: [
                { type: 'aqueous', cont: 1 },
                { type: 'sacred', cont: 1 },
                { type: 'earthen', cont: 1 },
                { type: 'eldritch', cont: 1 },
                { type: 'infernal', cont: 1 }

            ],
            id: `${id_prefix}novice_spell_book`
        },
        {
            extra_items: [{ item: 'ars_nouveau:source_gem' }],
            input: { item: 'botania:dry_seeds' },
            output: { item: 'ars_nouveau:magebloom_crop' },
            spirits: [
                { type: 'arcane', count: 1 }
            ],
            id: `${id_prefix}magebloom_crop`
        },
        {
            extra_items: [{ item: 'ars_nouveau:archwood_planks', count: 4 }, ],
            input: { item: 'create:brass_casing' },
            output: { item: 'ars_nouveau:imbuement_chamber' },
            spirits: [
                { type: 'aqueous', cont: 1 },
                { type: 'sacred', cont: 1 },
                { type: 'earthen', cont: 1 },
                { type: 'infernal', cont: 1 },
                { type: 'eldritch', cont: 1 }

            ],
            id: `${id_prefix}imbuement_chamber`
        },
        {
            extra_items: [{ item: 'kubejs:devil_dust', count: 2 }, { item: 'minecraft:torch', count: 4 }],
            input: { item: 'kubejs:mana_orb' },
            output: Item.of('gateways:gate_pearl', '{gateway:"gateways:blaze_gate_small"}'),
            spirits: [
                { type: 'wicked', count: 2 },
                { type: 'sacred', count: 1 }

            ],
            id: `${id_prefix}blaze_gate_small`
        },

    ]
recipes.forEach((recipe) => {
    recipe.type = 'malum:spirit_infusion';
    event.custom(recipe).id(recipe.id);
})
});
