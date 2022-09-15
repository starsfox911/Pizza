import React from 'react'
import { Link } from 'react-router-dom'
import { NotFoundBlock } from '../components/NotFoundBlock/NotFoundBlock'

export const NotFound = () => {
    return (
        <>
            <NotFoundBlock />
            <br />
            <br />
            <Link to={'./'}>вернитесь на главную</Link>
        </>
    )
}
