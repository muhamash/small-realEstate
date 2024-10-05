// import React from 'react'

import FeaturesCard from "./common/FeaturesCard";
import Header from "./common/Header";
import FeatureOne from "./common/svg/FeatureOne";
import Title from "./common/Title";

export default function Features ()
{
    const FeaturesData = [
        {
            title: 'Premium Property Listings',
            descripTion: 'Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.',
            icon: <FeatureOne/>
        },
        {
            title: 'Personalized Property Matching',
            descripTion: 'Our advanced matching system pairs you with properties that align with your specific needs and desires.',
            icon: <FeatureOne/>
        },
        {
            title: 'Expert Guidance and Support',
            descripTion: 'Benefit from the expertise of our dedicated team of real estate professionals.',
            icon: <FeatureOne/>
        },
        {
            title: 'Virtual Tours',
            descripTion: 'Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home',
            icon: <FeatureOne/>
        }
    ]
    return (
        <div className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                Features
                            </span>
                            <Header text={ "Main Features Of Play" } />
                            <Title text={ "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form." } />
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    { FeaturesData?.map( ( feature, index ) => (
                        <FeaturesCard key={ index } title={ feature.title } description={ feature.description } Children={ feature.icon } />
                    ) ) }

                </div>
            </div>
        </div>
    );
}
