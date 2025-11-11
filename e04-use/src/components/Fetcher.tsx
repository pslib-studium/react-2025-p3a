import { use } from "react";

const response = fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
                .then(x => x.json());

const Fetcher = () => {
    const data = use(response);

    return (
        <>
        {data.drinks.map((drink: any) => (
            <div key={drink.idDrink}>{drink.strDrink} {drink.strAlcoholic}</div>
        ))}

        <pre>
            Data:
            {JSON.stringify(data, null, 2)}
        </pre>
        </>
    );
};

export default Fetcher;