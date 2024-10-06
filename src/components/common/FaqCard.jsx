/* eslint-disable react/prop-types */
// import React from 'react'

import SubHeader from "./SubHeader";
import QuestionSvg from "./svg/QuestionSvg";
import Title from "./Title";

export default function FaqCard( {header, title}) {
    return (
        <div className="mb-12 flex w-full lg:mb-[70px] lg:w-1/2">
            <div
                className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                <QuestionSvg/>
            </div>
            <div className="w-full">
                <SubHeader text={header}/>
                <Title text={title}/>
            </div>
        </div>
    );
}
