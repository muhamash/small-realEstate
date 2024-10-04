/* eslint-disable react/prop-types */
// import React from 'react'
export default function SubHeader({text}) {
    return (
        <h2 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {text ? text : 'Any Questions? Look Here'}
        </h2>

    );
}
