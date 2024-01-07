ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs/minecraft/stonecutting/';

    const recipes = [
      //  {
       //     output: '2x create:brass_ladder',
       //     input: '#forge:plates/bronze',
        //    id: `${id_prefix}brass_ladder`
       // }
    ];

    recipes.forEach((recipe) => {
        event.stonecutting(recipe.output, recipe.input).id(recipe.id);
    });
});
