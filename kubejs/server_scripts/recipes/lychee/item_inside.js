ServerEvents.recipes((event) => {

  const id_prefix = 'kubejs/lychee/item_inside/';

//删除重复配方
event.remove({ output: 'botania:grass_seeds' })


  const recipes = [
    
//物品+流体>流体 and 粒子+音效
  {
      item_in: [{ item: 'botania:infused_seeds' }],
      block_in: { blocks: ['minecraft:water'] },
      post: 
      [
          {type: 'execute',command:'particle minecraft:dust 0 0 2 1 ~ ~1 ~ 0.2 0.2 0.2 1 75 normal',hide: true},
          {type: 'execute',command:'playsound minecraft:block.brewing_stand.brew block @p ~ ~ ~ 1 .7',hide: true},
          {type: 'place',block: 'kubejs:manafluid'}
      ],
      id: `${id_prefix}manaa`
  },
  {
    item_in: [{ item: 'botania:golden_seeds', }],
    block_in: { blocks: ['minecraft:water'] },
    post: 
    [
        {type: 'execute',command:'playsound minecraft:block.brewing_stand.brew block @p ~ ~ ~ 1 .7',hide: true},
        {type: 'place',block: 'kubejs:yellowfluid'}
    ],
    id: `${id_prefix}yelloww`
 },
 {
  item_in: [{ item: 'botania:scorched_seeds', }],
  block_in: { blocks: ['minecraft:water'] },
  post: 
  [
      {type: 'execute',command:'playsound minecraft:block.brewing_stand.brew block @p ~ ~ ~ 1 .7',hide: true},
      {type: 'place',block: 'kubejs:redfluid'}
  ],
  id: `${id_prefix}redd`
},
{
  item_in: [{ item: 'botania:scorched_seeds', }],
  block_in: { blocks: ['minecraft:water'] },
  post: 
  [
      {type: 'execute',command:'playsound minecraft:block.brewing_stand.brew block @p ~ ~ ~ 1 .7',hide: true},
      {type: 'place',block: 'kubejs:redfluid'}
  ],
  id: `${id_prefix}redd`
},
{
  item_in: [{ item: 'botania:vivid_seeds', }],
  block_in: { blocks: ['minecraft:water'] },
  post: 
  [
      {type: 'execute',command:'playsound minecraft:block.brewing_stand.brew block @p ~ ~ ~ 1 .7',hide: true},
      {type: 'place',block: 'kubejs:greenfluid'}
  ],
  id: `${id_prefix}greenn`
},
{
  item_in: [{ item: 'botania:mutated_seeds', }],
  block_in: { blocks: ['kubejs:manafluid'] },
  post: 
  [
      {type: 'execute',command:'playsound minecraft:block.brewing_stand.brew block @p ~ ~ ~ 1 .7',hide: true},
      {type: 'place',block: 'kubejs:purplefluid'}
  ],
  id: `${id_prefix}purplee`
},



//物品 + 流体(不消耗) > 物品
  {
    item_in: [{ item: 'botania:dry_seeds' }],
    block_in: { blocks: ['kubejs:greenfluid'] },
    post: [{ type: 'drop_item', item: 'botania:grass_seeds' }],
    id: `${id_prefix}grass_seeds`
  },
  {
    item_in: [{ item: 'minecraft:dandelion' }],
    block_in: { blocks: ['kubejs:purplefluid'] },
    post: [{ type: 'drop_item', item: 'hexerei:mandrake_flower' }],
    id: `${id_prefix}mandrake_flower`
  },

//物品 + 火 > 物品 
{
  item_in: [{ item: 'minecraft:gunpowder' }],
  block_in: { blocks: ['minecraft:fire'] },
  post: [{ type: 'drop_item', item: 'kubejs:devil_dust' }],
  id: `${id_prefix}devil_dust`
},



//物品 + 流体(消耗) > 物品
  {
    item_in: [{ item: 'kubejs:glass_orb' }],
    block_in: { blocks: ['kubejs:manafluid'] },
    post: [
      { type: 'drop_item', item: 'kubejs:mana_orb' },
      {type: 'place', block: 'minecraft:air' }
  ],
    id: `${id_prefix}mana_orb`
  },
  {
    item_in: [{ item: 'homespun:ironberries' }],
    block_in: { blocks: ['kubejs:manafluid'] },
    post: [
      { type: 'drop_item', item: 'kubejs:mana_berry' },
      {type: 'place', block: 'minecraft:water' ,contextual: { type: 'chance', chance: 0.5}}
  ],
    id: `${id_prefix}mana_berry`
  },
  {
    item_in: [{ item: 'homespun:ironberries' }],
    block_in: { blocks: ['kubejs:redfluid'] },
    post: [
      { type: 'drop_item', item: 'kubejs:redd_berry' },
      {type: 'place', block: 'minecraft:water' ,contextual: { type: 'chance', chance: 0.5}}
  ],
    id: `${id_prefix}redd_berry`
  },
  {
    item_in: [{ item: 'homespun:ironberries' }],
    block_in: { blocks: ['kubejs:yellowfluid'] },
    post: [
      { type: 'drop_item', item: 'kubejs:yelloww_berry' },
      {type: 'place', block: 'minecraft:water' ,contextual: { type: 'chance', chance: 0.5}}
  ],
    id: `${id_prefix}yelloww_berry`
  },
  {
    item_in: [{ item: 'homespun:ironberries' }],
    block_in: { blocks: ['kubejs:greenfluid'] },
    post: [
      { type: 'drop_item', item: 'kubejs:greenn_berry' },
      {type: 'place', block: 'minecraft:water' ,contextual: { type: 'chance', chance: 0.5}}
  ],
    id: `${id_prefix}greenn_berry`
  },
  {
    item_in: [{ item: 'minecraft:clay_ball' }],
    block_in: { blocks: ['kubejs:manafluid'] },
    post: [
      { type: 'drop_item', item: 'minecraft:dirt', count: 4 },
      {type: 'place', block: 'minecraft:water' ,contextual: { type: 'chance', chance: 0.5}}
  ],
    id: `${id_prefix}dirt4`
  },
  {
    item_in: [{ item: 'minecraft:clay' }],
    block_in: { blocks: ['kubejs:manafluid'] },
    post: [
      { type: 'drop_item', item: 'minecraft:dirt', count: 16 },
      {type: 'place', block: 'minecraft:water' ,contextual: { type: 'chance', chance: 0.5}}
  ],
    id: `${id_prefix}dirt16`
  },
  {
    item_in: [{ item: 'botania:metamorphic_forest_stone' }],
    block_in: { blocks: ['kubejs:manafluid'] },
    post: [
      { type: 'drop_item', item: 'minecraft:andesite' },
      {type: 'place', block: 'minecraft:water' ,contextual: { type: 'chance', chance: 0.1}}
  ],
    id: `${id_prefix}andesite`
  },
  {
    item_in: [{ item: 'malum:runewood_sapling' }],
    block_in: { blocks: ['kubejs:redfluid'] },
    post: [
      { type: 'drop_item', item: 'ars_nouveau:red_archwood_sapling' },
      {type: 'place', block: 'minecraft:water' ,contextual: { type: 'chance', chance: 0.2}}
  ],
    id: `${id_prefix}red_archwood_sapling`
  },
  {
    item_in: [{ item: 'malum:runewood_sapling' }],
    block_in: { blocks: ['kubejs:purplefluid'] },
    post: [
      { type: 'drop_item', item: 'ars_nouveau:purple_archwood_sapling' },
      {type: 'place', block: 'minecraft:water' ,contextual: { type: 'chance', chance: 0.2}}
  ],
    id: `${id_prefix}purple_archwood_sapling`
  },
  {
    item_in: [{ item: 'malum:runewood_sapling' }],
    block_in: { blocks: ['kubejs:manafluid'] },
    post: [
      { type: 'drop_item', item: 'ars_nouveau:blue_archwood_sapling' },
      {type: 'place', block: 'minecraft:water' ,contextual: { type: 'chance', chance: 0.2}}
   ],
    id: `${id_prefix}blue_archwood_sapling`
  },
  {
    item_in: [{ item: 'malum:runewood_sapling' }],
    block_in: { blocks: ['kubejs:greenfluid'] },
    post: [
      {type: 'drop_item', item: 'ars_nouveau:green_archwood_sapling' },
      {type: 'place', block: 'minecraft:water' ,contextual: { type: 'chance', chance: 0.2}}
    ],

    id: `${id_prefix}green_archwood_sapling`
  },
  


]
  recipes.forEach((recipe) => {
      recipe.type = 'lychee:item_inside';
      event.custom(recipe).id(recipe.id);
})
});



