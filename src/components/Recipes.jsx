import {useState} from 'react';

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



const Recipes =() =>{
    const [recipe,setRecipe] = useState({})
    return(
     
        <div>
            <h3>Current Recipe:</h3>
            <button onClick={() => setRecipe(elvenshieldRecipe)}>
                elvenshieldRecipe
            </button>
            <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
                elvenGauntletsRecipe
            </button>

            <ul>
                {Object.keys(recipe).map((material)=>(
                    <li key={material}>
                        {material} : {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Recipes;
