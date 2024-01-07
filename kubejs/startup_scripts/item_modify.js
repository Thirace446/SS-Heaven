ItemEvents.modification(event => {

    event.modify('kubejs:mana_berry', item => {
      item.foodProperties = food => {
          food
            .hunger(1)
            .saturation(2)
            .fastToEat(true)
            .effect('ars_nouveau:mana_regen', 60, 0, 1);
      }
    }),
    event.modify('kubejs:greenn_berry', item => {
        item.foodProperties = food => {
            food
            .hunger(1)
            .saturation(2)
            .fastToEat(true)
            .effect('ars_nouveau:recovery', 60, 0, 1);
        }
      }),
      event.modify('kubejs:yelloww_berry', item => {
        item.foodProperties = food => {
            food
            .hunger(1)
            .saturation(2)
            .fastToEat(true)
            .effect('ars_nouveau:spell_damage', 60, 0, 1);
        }
      }),
      event.modify('kubejs:redd_berry', item => {
        item.foodProperties = food => {
            food
            .hunger(1)
            .saturation(2)
            .fastToEat(true)
            .effect('ars_nouveau:shielding', 60, 0, 1);
        }
      }),

    event.modify('kubejs:allseeds_stew', item => {
        item.foodProperties = food => {
            food
            .hunger(1)
            .saturation(10)
            .fastToEat(true)
            .effect('slowness', 2400, 0, 1)
            .effect('mining_fatigue', 2400, 3, 1)
            .effect('poison', 2400, 2, 1)
            .effect('wither', 2400, 2, 1)
            //.effect('darkness', 2400, 0, 1)
            .effect('blindness', 2400, 0, 1);

        }
      }),
      
    //防火
    event.modify('minecraft:gunpowder', item => {
        item.fireResistant = true
      }),
    event.modify('kubejs:devil_dust', item => {
        item.fireResistant = true
      })
});




