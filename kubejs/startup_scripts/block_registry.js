//priority: 900
StartupEvents.registry('block', (event) => {
    const blocks = [
        {
            name: 'dawnstone_casing',
            material: 'rock',
            hardness: 2.0
        },
        {
            name: 'sapphire_block',
            material: 'rock',
            hardness: 2.0
        }
        
    ];

    blocks.forEach((block) => {
        const block_event = event.create(block.name).material(block.material).hardness(block.hardness);

        if (block.leaves) {
            block_event
                .renderType('cutout')
                .notSolid()
                .noValidSpawns(true)
                .suffocating(false)
                .viewBlocking(false)
                .redstoneConductor(false)
                .transparent(false);
        }
    });
});
