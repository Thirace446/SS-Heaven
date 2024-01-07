ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs/minecraft/shapeless/';

    const recipes = [
        {output: Item.of('minecraft:bone_meal', 1),
        inputs: 'kubejs:boneshard',
        id: `bone_meat`
        },
        {output: Item.of( 'minecraft:flint_and_steel' , '{Damage:0}' ),
        inputs: [ 'create:andesite_alloy' , 'minecraft:flint' ],
        id: `minecraft:flint_and_steel`
        },
        

    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
