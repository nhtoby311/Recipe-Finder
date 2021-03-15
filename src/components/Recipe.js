function Recipe(props)
{
    return(
        
        <div className="recipe-container">
            <div className="recipe-card" style={{backgroundImage: `url(${props.image})`}}>
                <h1 className="title-recipe">{props.name}</h1>
            </div>
            <div className="ingredient-box">
                    <ul className="list">
                    {props.ingredients.map(function(ingridient,index){
                        return <li className="ingredient" key={index}>
                        {ingridient}
                        </li>
                    }
                    )}
                    </ul>
            </div>
        </div>
    );
}
export default Recipe