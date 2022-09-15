import React, { useEffect, useState } from 'react'



import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { PizzaSkeleton } from "../components/PizzaBlock/PizzaSkeleton";

export const Home = () => {

    //стэйты
    const [pizzas1, setPizzas1] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // ссылки
    const url = "https://63203ee09f82827dcf2826e0.mockapi.io/api/items";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setPizzas1(res);


                if (res.length > 0) {
                    setIsLoading(false);
                }
            });
    }, []);



    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading
                        ? [...new Array(6)].map((_, index) => (
                            <PizzaSkeleton key={index} />
                        ))
                        : pizzas1.map((pizzasObj, index) => (
                            <PizzaBlock
                                key={pizzasObj.title + "  " + index}
                                {...pizzasObj}
                            />
                        ))}
                </div>
            </div>
        </>
    )
}
