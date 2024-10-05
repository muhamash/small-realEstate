// import React from 'react'

import Header from "./common/Header";
import PropertyCard from "./common/PropertyCard";
import Title from "./common/Title";

export default function Property ()
{
    const propertyData = [
        {
            title: 'Bosila city house',
            image: 'community.jpg',
            price: 1000,
            bed: 13,
            bath: 7
        },
        {
            title: 'Uttara city house',
            image: 'images.jpeg',
            price: 2000,
            bed: 10,
            bath: 8
        },
        {
            title: 'Amar bari, Dhanmondi',
            image: 'property.webp',
            price: 4000,
            bed: 40,
            bath: 30
        },
        {
            title: 'Mughol house',
            image: 'propertyImageOne.png',
            price: 3000,
            bed: 5,
            bath: 3
        },
        {
            title: 'Mohammadpur city house',
            image: 'propertyImageTwo.jpg',
            price: 2000,
            bed: 2,
            bath: 3
        }
    ];

    return (
        <div className="container">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                <span className="mb-2 block text-lg font-semibold text-primary">
                    Properties
                </span>
                <Header text={ "Grab your Dream Property" } />
                <Title text={ "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form." } />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    propertyData?.map( ( property, index ) => (
                        <PropertyCard key={ index } price={property.price} bed={property.bed} image={property.image} title={property.title} bath={property.bath}/>
                   )) 
                }
            </div>
        </div>
    );
}
