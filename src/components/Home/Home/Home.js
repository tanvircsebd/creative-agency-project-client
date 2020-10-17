import React from 'react';
import Company from '../Company/Company';
import ClientFeedBack from '../ClientFeedBack/ClientFeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Company></Company>
            <Services></Services>
            <Portfolio></Portfolio>
            <ClientFeedBack></ClientFeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;