import React from "react"
import ContentLoader from "react-content-loader"
let width = 320
let height = 500
let circle = 125

export const PizzaSkeleton = () => (


    <ContentLoader
        className="pizza-block"
        title={'Loading'}

        speed={1}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height} `}
        backgroundColor="#acacac"
        foregroundColor="#2e2e2e"

    >
        <circle cx="160" cy="130" r={`${circle}`} />
        <rect x="10" y="280" rx="10" ry="10" width="300" height="24" />
        <rect x="10" y="320" rx="10" ry="10" width="300" height="40" />
        <rect x="10" y="370" rx="10" ry="10" width="300" height="36" />
        <rect x="10" y="425" rx="10" ry="10" width="100" height="40" />
        <rect x="173" y="425" rx="10" ry="10" width="133" height="40" />
    </ContentLoader>
)



