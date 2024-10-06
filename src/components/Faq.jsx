// import React from 'react'

import FaqCard from "./common/FaqCard";
import Header from "./common/Header";
import Title from "./common/Title";

export default function Faq ()
{
    const faqData = [
        {
            header: "Is TailGrids Well-documented?",
            title: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
        },
        {
            header: "What's up?",
            title: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
        },
        {
            header: "Are you learning react?",
            title: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
        },
        {
            header: "TailwindCss best!",
            title: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
        }
    ];

    return (
        <div id="blog" className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                FAQ
                            </span>
                            <Header text={"Any Questions? Look Here"}/>
                            <Title text={"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."}/>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 flex flex-wrap">
                        {
                            faqData.map( ( f, index ) => (
                             <FaqCard key={index} header={f.header} title={f.title}/>
                         ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
