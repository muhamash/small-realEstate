// import React from 'react'

import QuestionSvg from "./svg/QuestionSvg";
import SubHeader from "./SubHeader";
import Title from "./Title";

export default function FaqCard() {
    return (
        <div className="mb-12 flex lg:mb-[70px]">
            <div
                className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                <QuestionSvg/>
            </div>
            <div className="w-full">
                <SubHeader/>
                <Title/>
            </div>
        </div>
    );
}
