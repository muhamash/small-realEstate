 
// import React from 'react'

import Button from './common/Button';
import Header from "./common/Header";
import CtaSvg from './common/svg/CtaSvg';
import Title from "./common/Title";

export default function Cta ()
{
    return (
        <div className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
            <div className="container mx-auto">
                <div className="relative overflow-hidden">
                    <div className="-mx-4 flex flex-wrap items-stretch">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[570px] text-center">
                                <p className="font-light mb-2.5 text-3xl  text-white md:text-[38px] md:leading-[1.44] my-3">What Are You Looking For?</p>
                                <Header text={ "Get Started Now" } color={ "white" } />
                                <Title text={ "There are many variations of passages of Lorem Ipsum but the majority have suffered in some form." } color={ "white" } />
                                <Button href="javascript:void(0)"
                                    className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489] my-5" text={ "Let's have a meeting" } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CtaSvg/>
        </div>
    );
}
