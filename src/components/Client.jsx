// import React from 'react'
import ClientCard from './common/ClientCard';
import Header from './common/Header';
import Title from './common/Title';

export default function Client ()
{
    const clients = [
        {
            clientImage: '/team/team-01.png',
            clientName: 'John Doe',
            clientPosition: 'CEO'
        },
        {
            clientImage: '/team/team-02.png',
            clientName: 'Jane Smith',
            clientPosition: 'CTO'
        },
        {
            clientImage: '/team/team-03.png',
            clientName: 'Mike Johnson',
            clientPosition: 'CFO'
        },
        {
            clientImage: '/team/team-04.png',
            clientName: 'Mike Johnson ii',
            clientPosition: 'SWE'
        }
    ];

    return (
        <div id="team" className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                Our Team Members
                            </span>
                            <Header text={ "Our Clients" } />
                            <Title text={ "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form." } />
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap justify-center">
                    {
                        clients.map( ( client, index ) => (
                            <ClientCard key={ index }  clientImage={client.clientImage} clientName={client.clientName} clientPosition={client.clientPosition}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
