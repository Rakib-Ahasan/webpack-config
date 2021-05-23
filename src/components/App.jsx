import "../style/index.scss";
import Recipes from "./Recipes.jsx";
import pexel from "../Images/pexel.jpg";
import sagor from "../Images/sagor.jpg";

const App =() =>{
    return(
        <>
        <section className="hero"></section>
        <main>
                <section>
                    <h1>Oh hai, React</h1>
                </section>
                <img src="{pexel}" alt="pexel" width="250"/>
                <img src="{sagor}" alt="pexel" width="250"/>
                <Recipes/>
        </main>
       
        </>
    )
}


export default App
