import React from 'react'
import { useState } from 'react'
export const Categories = () => {
    const [activeCategories, setActiveCategories] = useState(0)

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',

    ]

    return (
        <div className="categories">
            <ul>

                {
                    categories.map((value, index) =>
                        <li
                            onClick={() => setActiveCategories(index)}
                            key={index}
                            className={activeCategories === index ? "active" : ""}>
                            {value}
                        </li>)
                }
            </ul>
        </div>
    );
};


