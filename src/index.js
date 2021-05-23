import "./style/index.scss"
const elvenshieldRecipe = {
    leatherScripts:2,
    ironIngot:1,
    refinedMoonstone:4,
};
const elvenGauntletsRecipe={
     ...elvenshieldRecipe,
    leather:1,
    refinedMoonstonne:4,
};
console.log(elvenshieldRecipe);
console.log(elvenGauntletsRecipe);