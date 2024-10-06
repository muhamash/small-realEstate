/* eslint-disable react/prop-types */
// import React from 'react'

export default function Title({color, text, children}) {
    return (
        <p style={ {
            color : color ? color : '#4B5563'
        }} className="text-base  dark:text-dark-6 py-3">
            { text ? text : ' There are many variations of passages of Lorem' }
            {children}
        </p>
    );
}
