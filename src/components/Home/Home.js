import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Mentor from '../Mentor/Mentor';
import TopServices from '../TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopServices></TopServices>
            <Mentor></Mentor>
            <Footer></Footer>
        </div>
    );
};

export default Home;