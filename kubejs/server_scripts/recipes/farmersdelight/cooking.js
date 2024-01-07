ServerEvents.recipes(event => {

    const id_prefix = 'kubejs/farmersdelight/cooking/';

    //remove
    //event.remove({ output: '1' })

    const recipes = [
        {
        ingredients:[ //输入
        { item: 'botania:mutated_seeds' },
        { item: 'botania:golden_seeds' },
        { item: 'botania:dry_seeds' },
        { item: 'botania:vivid_seeds' },
        { item: 'botania:scorched_seeds' },
        { item: 'botania:infused_seeds' }
        ],
        result: { item: 'kubejs:allseeds_stew' }, //输出
        recipe_book_tab: 'misc',
        experience: 200 ,
        cookingtime: 10.0 ,
        container: { item:'minecraft:bowl' },

        id: `${id_prefix}allseeds_stew`
        }
    ]
recipes.forEach((recipe) => {
    recipe.type = 'farmersdelight:cooking';
    event.custom(recipe).id(recipe.id);
})
});





  //drinks meals misc
