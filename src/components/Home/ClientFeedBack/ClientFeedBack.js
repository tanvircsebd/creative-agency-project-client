import React, { useEffect, useState } from 'react';
import ClientFeedBackInfo from '../ClientFeedBackInfo/ClientFeedBackInfo';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';

const clientInfo = [
    {
        name: 'Nash Patrik',
        company: 'CEO, Manpol',
        img:customer1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
    {
        name: 'Miriam Barron',
        company: 'CEO, Manpol',
        img: customer2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
    {
        name: 'Bria Malone',
        company: 'CEO, Manpol',
        img:customer3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
];

const ClientFeedBack = () => {
    const [clientFeedBack,setClientFeedBack] = useState([]);
    useEffect(()=>{
        fetch('https://mysterious-atoll-71403.herokuapp.com/allReview')
        .then(res => res.json())
        .then(data => setClientFeedBack(data))
    },[])
    return (
        <div className="col-md-12 m-auto">
            <div className="my-5">
                <h2 className="text-center">Clients <span className="textBrand">Feedback</span></h2>
            </div>
            <div className="row d-flex justify-content-center my-5">
                {
                    clientFeedBack.map(client=> <ClientFeedBackInfo key={client._id} client={client}></ClientFeedBackInfo>)
                }
            </div>
        </div>
    );
};

export default ClientFeedBack;