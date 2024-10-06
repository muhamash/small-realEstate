 
// import React from 'react'
import ContactCard from './common/ContactCard';
import ContactForm from './common/ContactForm';
import Header from './common/Header';
import Title from './common/Title';

export default function Contact() {
    return (
        <div id="contact" className="relative py-20 md:py-[120px]">
            <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
            <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
            <div className="container px-4">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                        <div className="ud-contact-content-wrapper">
                            <div className="ud-contact-title mb-12 lg:mb-[150px]">
                                <Title text={ "CONTACT US" } />
                                <Header text={ "Let's talk about your problem." } />
                            </div>
                            <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                                <ContactCard icon={ true } title={ "Our Address" } footer={ "401 Broadway, 24th Floor, Orchard Cloud View, London" } />
                                <ContactCard title={ "How Can We Help?" } footer={
                                    <div>
                                        <span>info@yourdomain.com</span> <br /> <span>
                                            contact@yourdomain.com
                                        </span>
                                    </div>
                                } />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}
