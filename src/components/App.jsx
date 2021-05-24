import "../style/index.scss";
import Recipes from "./Recipes.jsx";

const App =() =>{
    return(
        <>
        <section className="hero"></section>
        <main>
                <section>
                    <h1>Oh hai,React</h1>
                </section>
                <Recipes/>
        </main>
       
        </>
    )
}


export default App;
