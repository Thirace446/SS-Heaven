
ServerEvents.recipes(event => {

    const id_prefix = 'kubejs/homespun/evaporation/';

    //remove
    event.remove({ id: 'homespun:crushing/crushing_tiny_iron_dust_from_raw_iron' })

    const recipes = [
        //{
        //output_item: { tag: 'malum:runewood_logs/runefluid' , count: 1 },
        //fluid_stack: { fluid: 'kubejs:runefluid', amount: 250 },
        //time: 100 ,
        //id: `${id_prefix}runefluid`
        //},

    ]
recipes.forEach((recipe) => {
    recipe.type = 'homespun:evaporating';
    event.custom(recipe).id(recipe.id);
})
});
