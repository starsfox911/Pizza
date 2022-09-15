import React, { useState } from 'react'
export const Sort = () => {

    const sortToList = ['популярности', 'цене', 'алфавиту'] // массив для сортировки пиццы 

    //Стэйты
    const [openPopUp, setPopUp] = useState(false) // для поп-ап
    const [selectSortPizza, setSelectSortPizza] = useState(false)   // для сортировки пиццы

    ///  для выбора по умолчания варианта сортировки и отображения ее по умолчанию
    const show = () => {
        let pickRate = sortToList[0]
        if (sortToList[selectSortPizza] === undefined) {
            return pickRate
        }
        return (pickRate = sortToList[selectSortPizza])

    }

    //выбор сортов пиццы
    const sortHandlerPick = (index) => {
        setSelectSortPizza(index)
        setPopUp(false)
    }


    return (
        <div className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={

                    () => (setPopUp(!openPopUp))

                }> {show()}
                </span>
            </div>
            {
                openPopUp && (
                    <div className="sort__popup">
                        <ul>{
                            sortToList.map(
                                (list, index) => (
                                    <li key={list + index}
                                        onClick={() => sortHandlerPick(index)}
                                        className={selectSortPizza === index ? 'active' : ''}
                                    > {list}
                                    </li>
                                )
                            )
                        }
                        </ul>
                    </div>
                )
            }
        </div >
    );
};