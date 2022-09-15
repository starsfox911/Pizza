import React, { useState } from 'react'

export const PizzaBlock = ({ title, price, imageUrl, sizes, types }) => {


    const typePizza = ['тонкое', 'традиционное']  // массив для типов теста
    // стэйты
    const [activTypePizza, setActivTypePizza] = useState(0) // для типа теста пиццы
    const [activSizePizza, setActivSizePizza] = useState(0) //для размера пиццы



    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt={title}
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        types?.map(
                            (type, index) =>
                                <li
                                    onClick={() => setActivTypePizza(index)}
                                    className={activTypePizza === index ? "active" : ""}
                                    key={type + index}>
                                    {typePizza[type]}
                                </li>)

                    }
                </ul>
                <ul>
                    {
                        sizes?.map(
                            (size, index) => (
                                <li onClick={() => setActivSizePizza(index)}
                                    className={activSizePizza === index ? "active" : ""}
                                    key={size + index}>
                                    {size} см</li>

                            )
                        )
                    }

                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{price}</div>
                <button className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>0</i>
                </button>
            </div>
        </div>
    )
}