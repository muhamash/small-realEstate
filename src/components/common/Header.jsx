/* eslint-disable react/prop-types */
// import React from 'react'

export default function Header({color, text}) {
    return (
        <h2 style={ {
            color: color ? color : 'black'
        }} className="mb-3 text-3xl font-bold leading-[1.2]  dark:text-white sm:text-4xl md:text-[40px]">
            {text ? text : 'defaultText'}
        </h2>
    );
}
