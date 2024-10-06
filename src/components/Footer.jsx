// import React from 'react'
import FacebookIcon from './common/svg/FacebookIcon';
import InstaIcon from './common/svg/InstaIcon';
import LinekdedIn from './common/svg/LinekdedIn';
import NavLogo from './common/svg/NavLogo';
import TwitterIcon from './common/svg/TwitterIcon';

export default function Footer() {
    return (
        <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
                        <div className="mb-10 w-full flex flex-col gap-5 items-start">
                            <NavLogo/>
                            <p className="mb-8 lg:max-w-[270px] md:text-[15px] text-[10px] text-gray-7 text-left">
                                We create digital experiences for brands and companies by using
                                technology.
                            </p>
                            <div className="flex items-center gap-5">
                                <InstaIcon fillColor={"white"}/>
                                <LinekdedIn fillColor={"white"}/>
                                <TwitterIcon fillColor={"white"}/>
                                <FacebookIcon fillColor={"white"}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-white">About Us</h4>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                                        About
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-white">Features</h4>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                                        How it works
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                                        Privacy policy
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                                        Refund policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-white">Latest blog</h4>
                            <div className="flex flex-col gap-8">
                                <a href="blog-details.html" className="group flex items-center gap-[22px]">
                                    <div className="overflow-hidden rounded">
                                        <img src="/blog/blog-footer-01.jpg" alt="blog" />
                                    </div>
                                    <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                                        I think really important to design with...
                                    </span>
                                </a>
                                <a href="blog-details.html" className="group flex items-center gap-[22px]">
                                    <div className="overflow-hidden rounded">
                                        <img src="/blog/blog-footer-02.jpg" alt="blog" />
                                    </div>
                                    <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                                        Recognizing the need is the primary...
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
