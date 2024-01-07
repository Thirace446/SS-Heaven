//priority: 900
StartupEvents.registry('fluid', (event) => {
    const fluids = [
        {
            type: 'thick',
            id: 'dawnstone',
            color: 0xF0AD49
        },
        {
            type: 'thin',
            id: 'manafluid',
            color: 0x34C0FB
        },
        {
            type: 'thin',
            id: 'redfluid',
            color: 0xFF6666
        },
        {
            type: 'thin',
            id: 'yellowfluid',
            color: 0xFFFF99
        },
        {
            type: 'thin',
            id: 'greenfluid',
            color: 0xA3F440
        },
        {
            type: 'thin',
            id: 'purplefluid',
            color: 0x5F33CD
        },
        {
            type: 'thin',
            id: 'whitefluid',
            color: 0x87FBFA
        },
        {
            type: 'thin',
            id: 'runefluid',
            color: 0xEAB56D
        },
        //f65ef8 a064f7
    ];

    fluids.forEach((fluid) => {
        if (fluid.type == 'thick') {
            event.create(fluid.id).thickTexture(fluid.color).bucketColor(fluid.color).displayName(fluid.display);
        } else if (fluid.type == 'thin') {
            event.create(fluid.id).thinTexture(fluid.color).bucketColor(fluid.color).displayName(fluid.display);
        }
    });
});
