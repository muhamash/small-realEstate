// import React from 'react'
import Button from "./common/Button";
import Header from "./common/Header";
import Title from "./common/Title";

export default function Hero() {
    return (
        <div id="home" className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <div className="hero-content  mx-auto max-w-[780px] text-center mb-5">
                            <Header color={ "white" } text={ "We'll build house of your dream" } />
                            <Title color={ "white" } text={ "We have 9000 more review and our customers trust on out property and quality products." } />
                            <div className="p-10 flex flex-wrap items-center justify-center gap-5">
                                <Button
                                    className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color" text={"Book Now"}>
                                    
                                </Button>
                                <Button
                                    className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark" text={"Contact Us"}>
                                        
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
